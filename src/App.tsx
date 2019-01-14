import React, {Fragment} from 'react'
import {StatusBar, StyleSheet, Animated, Image, TextInput, View, KeyboardAvoidingView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./Config/reduxStoreConfig";
import {AppNavigator} from "./Navigation/router";
import {bind} from "mvp-di";
import {ThemeStore, themeStore} from "./MobX/ThemeStore";
import {observer} from "mobx-react";
import {LightTheme} from "./MobX/LightTheme";
import {Notification} from "react-native-in-app-message";
import {TextView} from "./TextView";
import {
  ForceTouchGestureHandlerGestureEvent,
  ForceTouchGestureHandlerStateChangeEvent,
  State
} from "react-native-gesture-handler";
import {NavigationContainer} from "react-navigation";
import {SHOW_NOTIFICATION} from "./Navigation/routeName";
import {Blur} from "react-native-in-app-message/src/Blur";
import {Util} from "./Util";
import {DarkTheme} from "./MobX/DarkTheme";

const avatar = {uri: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/10/18/Pictures/_5fb51944-d2ee-11e8-841e-211dfd3178e1.jpg'};
const AnimatedKeyboardView = Animated.createAnimatedComponent(KeyboardAvoidingView);

interface Props {
  themeStore: ThemeStore
}

@observer
class Application extends React.Component<Props, {}> {

  force = new Animated.Value(0);
  input = new Animated.Value(0);

  state = {
    isForced: false
  };

  navigation!: NavigationContainer;

  @bind
  onPress() {
    Notification.hide();
    (this.navigation as any)._navigation.navigate(SHOW_NOTIFICATION, {
      image: avatar.uri,
      title: 'Iron Man'
    });
  }

  onForceTouchStateChange = (event: ForceTouchGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE && !this.state.isForced) {
      this.force.setValue(0);
    }
  };

  @bind
  onForceTouch(event: ForceTouchGestureHandlerGestureEvent) {
    const {force} = event.nativeEvent;
    if (!this.state.isForced) {
      Animated.timing(this.force, {
        toValue: force,
        duration: 0,
        useNativeDriver: true
      }).start();

      if (force === 1) {
        this.setState({isForced: true});
        Animated.timing(this.input, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }).start(() => this.inputView.focus());
      }
    }
  };

  @bind
  private onBlur() {
    this.setState({isForced: false});
    Notification.hide();
    Animated.timing(this.input, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
    Animated.timing(this.force, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  }

  private renderCustomNotification(color: string) {
    return (
      <Animated.View style={style.notification}>
        <Image source={avatar} style={style.avatar} />
        <Animated.View style={style.textContainer}>
          <TextView style={{color: color, fontWeight: '600', marginBottom: 4}}>Tony Stark</TextView>
          <TextView style={{color: color, fontSize: 14}}>
            Hey man, how's it going? call me
          </TextView>
        </Animated.View>
      </Animated.View>
    )
  }

  render(): React.ReactNode {
    const {themeStore} = this.props;
    const {color, backgroundColor, accentColor, borderColor} = themeStore.theme;
    const barStyle = themeStore.theme instanceof LightTheme ? 'dark-content' : 'light-content';
    return (
      <Fragment>
        <StatusBar barStyle={barStyle} />
        <AppNavigator ref={(node: any) => this.navigation = node}
                      screenProps={{themeStore, color, backgroundColor, accentColor}} />
        <Animated.View pointerEvents={'none'} style={{position: 'absolute', width: '100%', height: '100%', opacity: this.force}}>
          <Blur blurAmount={2} blurType={themeStore.theme instanceof DarkTheme ? 'dark' : 'light'} style={{width: '100%', height: '100%'}}/>
        </Animated.View>
        <AnimatedKeyboardView keyboardVerticalOffset={20} style={{position: 'absolute', left: 0, right: 0, bottom: 0, opacity: this.input}} behavior="position">
        <View style={{width: '100%', shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 7, padding: 10, backgroundColor: Util.shadeColor(backgroundColor, 10),alignItems: 'center', justifyContent: 'center'}}>
          <TextInput keyboardAppearance={themeStore.theme instanceof DarkTheme ? 'dark' : 'light'} onBlur={this.onBlur} ref={node => this.inputView = node} returnKeyLabel={'Reply'} placeholderTextColor={'#999'} placeholder={'Reply...'} style={{paddingHorizontal: 12, color: color, height: 34, width: '100%', borderRadius: 8, borderWidth: 1, backgroundColor: Util.shadeColor(backgroundColor, 15), borderColor: borderColor}}/>
        </View>
        </AnimatedKeyboardView>
        <Notification
          style={{
            transform: [{
              translateY: this.force.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 20],
              })
            },{
              scale: this.force.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.03],
              })
            }]
          }}
          onPress={this.onPress}
          useForceTouch={!this.state.isForced}
          onForceTouchGestureEvent={this.onForceTouch}
          onForceTouchHandlerStateChange={this.onForceTouchStateChange}
          autohide={false}
          textColor={color}
          customComponent={this.renderCustomNotification(color)} />
      </Fragment>
    )
  }
}

const style = StyleSheet.create({
  notification: {
    borderRadius: 12,
    marginHorizontal: 12,
    paddingTop: 12,
    paddingLeft: 16,
    overflow: 'hidden',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 1,
    padding: 12,
  }
});

const _App = () => (
  <Provider store={store}>
    <Application themeStore={themeStore} />
  </Provider>
);

export default _App;

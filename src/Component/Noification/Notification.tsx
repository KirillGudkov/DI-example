import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {BlurView} from "react-native-blur";
import {TextView} from "../../TextView";
import {Theme} from "../../MobX/Theme";
import {PanGestureHandler, PanGestureHandlerGestureEvent, State} from 'react-native-gesture-handler';
import {observer} from "mobx-react";
import {bind} from "mvp-di";

interface Props {
  text?: string,
  theme: {
    theme: Theme,
    color: string,
    backgroundColor: string,
    accentColor: string
  }
}

@observer
export class Notification extends React.Component<Props, {}> {

  private translateY = new Animated.Value(-300);

  public showNotification() {
    Animated.timing(this.translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  @bind
  private onGestureEvent(event: PanGestureHandlerGestureEvent) {
    if (event.nativeEvent.translationY > 0) {
      this.translateY.setValue(event.nativeEvent.translationY / 5)
    } else if (event.nativeEvent.translationY < 0) {
      this.translateY.setValue(event.nativeEvent.translationY)
    }
  }

  @bind
  private onHandlerStateChange(event: PanGestureHandlerGestureEvent) {
    if (event.nativeEvent.translationY > 0) {
      Animated.timing(this.translateY, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(this.translateY, {
        toValue: -300,
        duration: 250,
        useNativeDriver: true
      }).start();
    }
  };

  render() {
    const {color} = this.props.theme;
    return (
      <PanGestureHandler onHandlerStateChange={this.onHandlerStateChange} onGestureEvent={this.onGestureEvent}>
        <Animated.View style={[style.notification, {transform: [{translateY: this.translateY}]}]}>
          <BlurView style={style.absolute} blurType={'light'} blurAmount={10} />
          <TextView style={[style.text, {color: color}]}>
            {this.props.text}
          </TextView>
          <View style={[style.knob, {backgroundColor: color,}]} />
        </Animated.View>
      </PanGestureHandler>
    )
  }
}

const style = StyleSheet.create({
  notification: {
    width: '95%',
    shadowColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    top: 22,
    zIndex: 2,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 12,
    position: 'absolute',
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
    margin: 14,
    bottom: -6,
  },
  knob: {
    width: 50,
    height: 4,
    backgroundColor: '#ffffff',
    opacity: 0.5,
    borderRadius: 4,
    marginBottom: 6
  },
  absolute: {
    position: "absolute",
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

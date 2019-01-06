import React, {ReactNode} from 'react';
import {Animated, Dimensions, View, Text} from 'react-native';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {BlurView} from "react-native-blur";
import {bind} from "mvp-di";
import {style} from "./style";

interface Props {
  blurType?: 'xlight' | 'light' | 'dark',
  duration: number,
  autohide: boolean,
  blurAmount?: number,
  text?: string,
  textColor?: string,
  customComponent?: ReactNode
}

export class Notification extends React.Component<Props, {}> {

  static defaultProps = {
    blurAmount: 7,
    duration: 2000,
    autohide: true
  };

  private translateY = new Animated.Value(-300);
  private offset: number = isIphoneX() ? 42 : 22;
  private viewHeight: number = 0;

  @bind
  public showNotification(): void {
    const {autohide, duration} = this.props;
    Animated.spring(this.translateY, {
      toValue: 0,
      useNativeDriver: true
    }).start();
    if (autohide) {
      setTimeout(this.hideNotification, duration);
    }
  }

  @bind
  public hideNotification(): void {
    Animated.spring(this.translateY, {
      toValue: (this.viewHeight + this.offset) * -1,
      useNativeDriver: true
    }).start();
  }

  @bind
  private onGestureEvent(event: PanGestureHandlerGestureEvent): void {
    if (event.nativeEvent.translationY > 0) {
      this.translateY.setValue(event.nativeEvent.translationY / 5);
    } else if (event.nativeEvent.translationY < 0) {
      this.translateY.setValue(event.nativeEvent.translationY);
    }
  }

  @bind
  private onHandlerStateChange(event: PanGestureHandlerGestureEvent): void {
    if (event.nativeEvent.translationY > 0) {
      this.showNotification();
    } else {
      this.hideNotification();
    }
  };

  @bind
  private handleOnLayout(event: any): void {
    this.viewHeight = event.nativeEvent.layout.height;
  }

  private renderCustomComponent(): ReactNode {
    return this.props.customComponent;
  }

  private renderOwnComponent(): ReactNode {
    const {textColor, text} = this.props;
    return <Text style={[style.text, {color: textColor}]}>{text}</Text>;
  }

  render(): ReactNode {
    const {textColor, customComponent, blurAmount, blurType = 'light'} = this.props;
    const animatedStyle = [style.notification, {top: this.offset, transform: [{translateY: this.translateY}]}];
    return (
      <PanGestureHandler onHandlerStateChange={this.onHandlerStateChange} onGestureEvent={this.onGestureEvent}>
        <Animated.View onLayout={this.handleOnLayout} style={animatedStyle}>
          <BlurView style={style.absolute} blurType={blurType} blurAmount={blurAmount} />
          <View style={style.content}>
            {customComponent ? this.renderCustomComponent() : this.renderOwnComponent()}
          </View>
          <View style={[style.knob, {backgroundColor: textColor}]} />
        </Animated.View>
      </PanGestureHandler>
    )
  }
}

function isIphoneX() {
  const {height, width} = Dimensions.get('window');
  return (height / width) > 2.163;
}

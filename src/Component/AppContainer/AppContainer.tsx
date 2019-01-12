import React, {ReactNode} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent, Animated, StyleSheet, View} from 'react-native';
import {Theme} from "../../MobX/Theme";

interface Props {
  theme: Theme,
  children: ReactNode,
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}

export class AppContainer extends React.PureComponent<Props, {}> {

  render() {
    const {children, theme, onScroll} = this.props;
    const {backgroundColor} = theme;
    return (
      <View style={[style.container, {backgroundColor: backgroundColor}]}>
        <Animated.ScrollView scrollEventThrottle={1} onScroll={onScroll} contentContainerStyle={style.ccs} style={style.scroll}>
          {children}
        </Animated.ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  ccs: {
    alignItems: 'center'
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
});

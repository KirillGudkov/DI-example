import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {Theme} from "../../mobX/Theme";

interface Props {
  theme: Theme,
  children: ReactNode
}

export class AppContainer extends React.PureComponent<Props, {}> {

  render() {
    const {children, theme} = this.props;
    const {backgroundColor} = theme;
    return (
      <View style={[style.container, {backgroundColor: backgroundColor}]}>
        {children}
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

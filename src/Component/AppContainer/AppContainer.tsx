import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Theme} from "../../MobX/Theme";

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
        <ScrollView contentContainerStyle={style.ccs} style={style.scroll}>
          {children}
        </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  ccs: {
    flex: 1,
    alignItems: 'center'
  },
  scroll: {
    width: '100%'
  },
});

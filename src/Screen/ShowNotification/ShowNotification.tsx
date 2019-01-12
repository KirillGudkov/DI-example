import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {DefaultProps} from "../../Config/DefaultProps";
import {DefaultState} from "../../Config/DefaultState";
import {AppContainer} from "../../Component/AppContainer";
import {observer} from "mobx-react";

@observer
export class ShowNotification extends React.Component<DefaultProps, DefaultState> {

  static navigationOptions = ({navigation}: any) => {
    return {
      headerTitle: navigation.getParam('title')
    }
  };

  render() {
    const {theme} = this.props.screenProps.themeStore;
    return (
      <AppContainer theme={theme}>
        <Image resizeMethod={'resize'} style={style.image} source={{uri: this.props.navigation.getParam('image')}} />
      </AppContainer>
    )
  }
}

const style = StyleSheet.create({
  image: {
    width: '95%',
    marginTop: 10,
    alignSelf: 'center',
    height: 200,
    borderRadius: 12
  }
});

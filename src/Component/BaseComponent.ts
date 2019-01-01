import React from 'react';

interface Props {
  dispatch: Function,
  navigation: {
    navigate: Function,
    goBack: Function,
    setParams: Function
  }
}

interface State {

}


export default class BaseComponent extends React.Component<Props, State> {
}

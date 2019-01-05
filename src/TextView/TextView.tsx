import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {human} from 'react-native-typography'

interface Props {
  style: Object,
  children: ReactNode
}

export class TextView extends React.Component<Props, {}> {

  render() {
    const {children, style} = this.props;
    return (
      <Text style={[human.callout, style]}>
        {children}
      </Text>
    )
  }
}

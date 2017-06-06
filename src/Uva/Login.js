import React, { Component } from 'react';
import {
      AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';


class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = props.onClick;
    }

    render() {
        const click = this.props.onClick;
        return (
        <Button
            title='Login'
            onPress = {click}
        />
        );
    }
}

export default Login;

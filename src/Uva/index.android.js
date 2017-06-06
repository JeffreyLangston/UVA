import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WineList from './wineList';
import SplashScreen from './SplashScreen';
import {StackNavigator,} from 'react-navigation';

export default class Uva extends Component {
    constructor(props, context) {
      super(props, context);
      this.handleLoginAttempt = this.handleLoginAttempt.bind(this);
      this.state = {
        isLoggedIn: false,
        wines: [
          {
              name: 'Yummy wine',
          },
      ],
    };
    }

    handleLoginAttempt(e) {
        this.setState(
          { 
            isLoggedIn: true
           }
        );
    }

    render() {
    if (this.state.isLoggedIn) {
        return (
          <View>
            <Text>Logged in!</Text>
          </View>
    );
    } else {
       return (<SplashScreen onLoginAttempt={this.handleLoginAttempt}/>);
        }
  }
}

AppRegistry.registerComponent('Uva', () => Uva);

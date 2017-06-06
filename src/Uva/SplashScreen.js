import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WineList from './wineList';
import Login from './Login';

class SpashScreen extends Component {
    constructor(props, context) {
      super(props, context);

    }



    render() {
        return (
        <View style={styles.container}>
        <Text style={styles.welcome}>
          Uva
        </Text>
        <Text style={styles.instructions}>
          Welcome to Uva!
        </Text>
        <Text style={styles.instructions}>
          Add wines to your collection!
        </Text>
        <Login onClick={this.props.onLoginAttempt}/>
      </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
});


export default SpashScreen;

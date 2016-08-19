/**
 * Journey Native App
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';

class JourneyNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titles}>
          <Text style={styles.title}>
            Journey
          </Text>
          <Text style={styles.tagline}>
            Amazing trip plans
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.button}>
            Sign up
          </Button>
          <Button style={styles.button}>
            Log in
          </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe945',
  },
  titles: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 48,
    fontWeight: '200',
    textAlign: 'center',
    margin: 10
  },
  tagline: {
    fontSize: 24,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  buttons: {
    flex: 1,
    marginTop: 50
  },
  button: {
    width: 150,
    borderWidth: 2,
    padding: 10,
    fontWeight: '100',
    color: '#333333',
    fontSize: 18,
    margin: 10
  }
});

AppRegistry.registerComponent('JourneyNative', () => JourneyNative);

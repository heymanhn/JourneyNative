/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class JourneyNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Journey
        </Text>
        <Text style={styles.tagline}>
          Realize your dreams
        </Text>
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
  title: {
    fontSize: 48,
    fontWeight: '200',
    textAlign: 'center',
    margin: 10,
  },
  tagline: {
    fontSize: 24,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('JourneyNative', () => JourneyNative);

'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import Button from 'react-native-button'

class LoginEmailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelSection}>
          <Text style={styles.label}>
            What's your email?
          </Text>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.inputField}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            onChangeText={(text) => this.props.onEnterEmail(text)}
            onSubmitEditing={this.props.onSubmitPress}
            returnKeyType='next'
            defaultValue={this.props.email}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe945',
  },
  labelSection: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  label: {
    fontSize: 24,
    textAlign: 'center',
    color: '#333333',
    fontWeight: '300',
    marginBottom: 20
  },
  inputSection: {
    flex: 1
  },
  inputField: {
    width: 250,
    height: 40,
    borderColor: '#333333',
    borderWidth: 1,
    color: '#333333',
    fontWeight: '100',
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding:5
  }
})

export default LoginEmailScreen

'use strict'

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

class ScreenWithInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelSection}>
          <Text style={styles.label}>
            {this.props.label}
          </Text>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            {...this.props.inputProps}
            style={styles.inputField}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
          />
          <Text style={styles.errorMessage}>
            {this.props.error}
          </Text>
        </View>
      </View>
    )
  }
}

ScreenWithInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.object
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
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    margin: 10,
    textAlign: 'center'
  }
})

export default ScreenWithInput

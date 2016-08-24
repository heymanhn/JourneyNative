'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'
import Button from 'react-native-button'

class TripsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelSection}>
          <Text style={styles.label}>
            Trips
          </Text>
          <Text style={styles.label}>
            Hello, {this.props.user.username} !
          </Text>
          <TouchableHighlight
            onPress={this.props.onLogoutPress}
          >
            <Text>
              Logout
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe945',
  },
  labelSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 24,
    textAlign: 'center',
    color: '#333333',
    fontWeight: '300',
    marginBottom: 20
  }
})

export default TripsScreen

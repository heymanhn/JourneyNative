'use strict'

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

class TripsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelSection}>
          <Text style={styles.label}>
            Trips
          </Text>
          <Text style={styles.label}>
            Hello, {this.props.user && this.props.user.name} !
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

TripsScreen.propTypes = {
  user: PropTypes.object,
  onLogoutPress: PropTypes.func.isRequired
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
    fontWeight: '400',
    marginBottom: 20
  }
})

export default TripsScreen

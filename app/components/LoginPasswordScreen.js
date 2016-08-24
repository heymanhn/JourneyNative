'use strict'

import React, { Component } from 'react'
import ScreenWithInput from './ScreenWithInput'

class LoginPasswordScreen extends Component {
  render() {
    const inputProps = {
      keyboardType: 'email-address',
      returnKeyType: 'go',
      onChangeText: (text) => { this.props.onEnterPassword(text) },
      onSubmitEditing: this.props.onSubmitPress,
      secureTextEntry: true
    }

    return (
      <ScreenWithInput
        error={this.props.error}
        label="What's your password?"
        inputProps={inputProps}
      />
    )
  }
}

export default LoginPasswordScreen

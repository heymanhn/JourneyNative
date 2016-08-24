'use strict'

import React, { Component } from 'react'
import ScreenWithInput from './ScreenWithInput'

class LoginEmailScreen extends Component {
  render() {
    const inputProps = {
      keyboardType: 'email-address',
      returnKeyType: 'next',
      onChangeText: (text) => { this.props.onEnterEmail(text) },
      onSubmitEditing: this.props.onSubmitPress,
      defaultValue: this.props.email
    }

    return (
      <ScreenWithInput
        label="What's your email?"
        inputProps={inputProps}
      />
    )
  }
}

export default LoginEmailScreen

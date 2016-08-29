'use strict';

import React, { Component, PropTypes } from 'react';
import ScreenWithInput from './ScreenWithInput';

class SignupEmailScreen extends Component {
  render() {
    const inputProps = {
      keyboardType: 'email-address',
      returnKeyType: 'next',
      onChangeText: (text) => { this.props.onEnterEmail(text) },
      onSubmitEditing: this.props.onSubmitPress,
      defaultValue: this.props.email
    };

    return (
      <ScreenWithInput
        label="What's your email address?"
        inputProps={inputProps}
      />
    );
  }
}

SignupEmailScreen.propTypes = {
  email: PropTypes.string,
  onEnterEmail: PropTypes.func.isRequired,
  onSubmitPress: PropTypes.func.isRequired
};

export default SignupEmailScreen;

'use strict';

import React, { Component, PropTypes } from 'react';
import ScreenWithInput from './ScreenWithInput';

class LoginPasswordScreen extends Component {
  render() {
    const inputProps = {
      returnKeyType: 'go',
      onChangeText: (text) => { this.props.onEnterPassword(text) },
      onSubmitEditing: this.props.onSubmitPress,
      secureTextEntry: true
    };

    return (
      <ScreenWithInput
        error={this.props.error}
        label="What's your password?"
        inputProps={inputProps}
      />
    );
  }
}

LoginPasswordScreen.propTypes = {
  error: PropTypes.string,
  onEnterPassword: PropTypes.func.isRequired,
  onSubmitPress: PropTypes.func.isRequired
};

export default LoginPasswordScreen;

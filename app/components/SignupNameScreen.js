'use strict';

import React, { Component, PropTypes } from 'react';
import ScreenWithInput from './ScreenWithInput';

class SignupNameScreen extends Component {
  render() {
    const inputProps = {
      autoCapitalize: 'words',
      returnKeyType: 'next',
      onChangeText: (text) => { this.props.onEnterName(text) },
      onSubmitEditing: this.props.onSubmitPress,
      defaultValue: this.props.name
    };

    return (
      <ScreenWithInput
        label="What's your name?"
        inputProps={inputProps}
      />
    );
  }
}

SignupNameScreen.propTypes = {
  name: PropTypes.string,
  onEnterName: PropTypes.func.isRequired,
  onSubmitPress: PropTypes.func.isRequired
};

export default SignupNameScreen;

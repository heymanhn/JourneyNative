'use strict';

import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicator,
  Image,
  NavigationExperimental,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

import Intro from './Intro';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';
import SignupName from './SignupName';
import SignupEmail from './SignupEmail';
import SignupPassword from './SignupPassword';
import Trips from './Trips';
import { apiLogin, apiSignup, navigatePush, navigatePop } from '../actions';
import { nextRoutes } from '../constants';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental;

class AppContainer extends Component {
  render() {
    let { backAction, navigationState } = this.props;
    let newProps = {};
    if (this.shouldRenderBack()) {
      newProps.onNavigateBack = backAction;
    }

    return (
      <NavigationCardStack
        {...newProps}
        navigationState={navigationState}
        renderOverlay={props => (
          <NavigationHeader
            {...props}
            style={styles.header}
            renderLeftComponent={this.renderBackButtonComponent.bind(this)}
            renderRightComponent={this.renderNextButtonComponent.bind(this)}
          />
        )}
        renderScene={this.renderScene}
        style={styles.container}
      />
    );
  }

  shouldRenderBack() {
    const { navigationState } = this.props;
    const index = navigationState.index;
    const key = navigationState.routes[index].key;

    return !(index === 0 || key === 'Trips');
  }

  renderScene({ scene }) {
    const { route } = scene;

    switch(route.key) {
      case 'Intro':
        return <Intro />;
      case 'LoginEmail':
        return <LoginEmail />;
      case 'LoginPassword':
        return <LoginPassword />;
      case 'SignupName':
        return <SignupName />;
      case 'SignupEmail':
        return <SignupEmail />;
      case 'SignupPassword':
        return <SignupPassword />;
      case 'Trips':
        return <Trips />;
    }
  }

  renderBackButtonComponent(props) {
    if (!this.shouldRenderBack()) {
      return null;
    }

    return (
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={'#ffe945'}
        onPress={this.props.backAction}
      >
        <Image
          source={require('../assets/back-button.png')}
          style={styles.backButton}
        />
      </TouchableHighlight>
    );
  }

  renderNextButtonComponent(props) {
    const dismissKeyboard = require('dismissKeyboard');
    const currentScene = props.scene.route.key;
    let next = nextRoutes[currentScene];
    let { authState } = this.props;

    if (!next) {
      return null;
    }

    if (authState.isFetching) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.activityIndicator}
          size={'small'}
        />
      );
    }

    let onPressAction = () => {
      switch (next) {
        case 'Trips':
          dismissKeyboard();
          if (currentScene === 'LoginPassword') {
            return this.props.loginAction();
          } else if (currentScene === 'SignupPassword') {
            return this.props.signupAction();
          } else {
            return null;
          }
        default:
          return this.props.pushAction(next);
      }
    };

    return (
      <TouchableHighlight
        activeOpacity={1.0}
        underlayColor={'#ffe945'}
        onPress={onPressAction}
      >
         <Text style={styles.nextButton}>
          Next
        </Text>
       </TouchableHighlight>
    );
  }
}

AppContainer.propTypes = {
  navigationState: PropTypes.object,
  authState: PropTypes.object,
  backAction: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  signupAction: PropTypes.func.isRequired,
  pushAction: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    borderBottomWidth: 0
  },
  backButton: {
    margin: 10
  },
  nextButton: {
    fontSize: 16,
    margin: 10
  },
  activityIndicator: {
    height: 20,
    marginRight: 10,
    marginTop: 8
  }
});

export default connect(
  state => ({
    navigationState: state.navigationState,
    authState: state.authState
  }),
  dispatch => ({
    backAction: () => {
      dispatch(navigatePop());
    },
    loginAction: () => {
      dispatch(apiLogin());
    },
    signupAction: () => {
      dispatch(apiSignup());
    },
    pushAction: (key) => {
      dispatch(navigatePush(key));
    }
  })
)(AppContainer);

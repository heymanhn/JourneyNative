/**
 * Journey Native App
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigationExperimental
} from 'react-native';
import JourneyNavigator from './JourneyNavigator';

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

class JourneyNative extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      navigationState: {
        index: 0,
        routes: [{key: 'Intro'}],
      },
    };

    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  render() {
    return (
     <JourneyNavigator
       navigationState={this.state.navigationState}
       onNavigationChange={this._onNavigationChange}
     />
   );
  }

  _onNavigationChange(type: string): void {
    let {navigationState} = this.state;

    switch (type) {
     case 'push':
       const route = {key: 'route-' + Date.now()}; // Change later
       navigationState = NavigationStateUtils.push(navigationState, route);
       break;

     case 'pop':
       navigationState = NavigationStateUtils.pop(navigationState);
       break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState});
    }
  }

  handleBackAction(): boolean {
    return this._onNavigationChange('pop');
  }
}

AppRegistry.registerComponent('JourneyNative', () => JourneyNative);

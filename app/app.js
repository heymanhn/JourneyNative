import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import AppContainer from './containers/AppContainer';

const loggerMiddleware = createLogger();
const store = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  autoRehydrate()
)(createStore)(reducers);

export default class App extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  // Moving the persistStore() call to this event handler to prevent the root
  // view from loading until after the store has been rehydrated
  componentWillMount() {
    persistStore(store, { storage: AsyncStorage }, () => {
      this.setState({ rehydrated: true });
    })
  }

  render() {
    if (!this.state.rehydrated) {
      return null;
    }

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

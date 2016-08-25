import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import AppContainer from './containers/AppContainer'

const loggerMiddleware = createLogger()
const store = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  autoRehydrate()
)(createStore)(reducers)
persistStore(store, { storage: AsyncStorage })

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

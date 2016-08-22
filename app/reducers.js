'use strict'
import {
  NavigationExperimental
} from 'react-native'
import { combineReducers } from 'redux'
import { initialNavState } from './constants'

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

import {
  NAV_PUSH,
  NAV_POP,
  NAV_JUMP_TO_KEY,
  NAV_JUMP_TO_INDEX,
  NAV_RESET,
  LOGIN_SAVE_EMAIL,
  LOGIN_SAVE_PASSWORD,
  LOGIN_SUBMIT,
  LOGOUT
} from './actions'

function navigationState(state = initialNavState, action) {
	switch (action.type) {
  	case NAV_PUSH:
  		if (state.routes[state.index].key === (action.state && action.state.key)) {
        return state
      }
  		return NavigationStateUtils.push(state, action.state)

  	case NAV_POP:
  		if (state.index === 0 || state.routes.length === 1) {
        return state
      }
  		return NavigationStateUtils.pop(state)

  	case NAV_JUMP_TO_KEY:
  		return NavigationStateUtils.jumpTo(state, action.key)

  	case NAV_JUMP_TO_INDEX:
  		return NavigationStateUtils.jumpToIndex(state, action.index)

    case NAV_RESET:
      return NavigationStateUtils.reset(state, action.routes, action.index)

  	default:
  		return state
  }
}

function authentication(state = {}, action) {
  switch (action.type) {
    case LOGIN_SAVE_EMAIL:
      return { ...state, email: action.email }
    case LOGIN_SAVE_PASSWORD:
      return { ...state, password: action.password }
    case LOGOUT:
      return {}
  }
  return state
}

const appReducers = combineReducers({
	navigationState,
  authentication
})

export default appReducers

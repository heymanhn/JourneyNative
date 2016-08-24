'use strict'
import {
  NavigationExperimental
} from 'react-native'
import { combineReducers } from 'redux'
import { initialNavState, initialAuthState } from './constants'

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
  SIGNUP_SAVE_NAME,
  SIGNUP_SAVE_EMAIL,
  SIGNUP_SAVE_PASSWORD,
  API_LOGIN_REQUEST,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAILURE,
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

    case API_LOGIN_SUCCESS:
      return NavigationStateUtils.push(state, { key: 'Trips' })

    default:
      return state
  }
}

function authState(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_SAVE_EMAIL:
      return { ...state, email: action.email }
    case LOGIN_SAVE_PASSWORD:
      return { ...state, password: action.password }
    case SIGNUP_SAVE_NAME:
      return { ...state, newName: action.name }
    case SIGNUP_SAVE_EMAIL:
      return { ...state, newEmail: action.email }
    case SIGNUP_SAVE_PASSWORD:
      return { ...state, newPassword: action.password }
    case API_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case API_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
        token: action.token
      }
    case API_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        password: '',
        error: action.error
      }
    case LOGOUT:
      return initialAuthState
  }
  return state
}

const appReducers = combineReducers({
  navigationState,
  authState
})

export default appReducers

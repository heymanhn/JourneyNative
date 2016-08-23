'use strict'

/*
 * Action Types
 */

// Navigation
export const NAV_PUSH = 'NAV_PUSH'
export const NAV_POP = 'NAV_POP'
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY'
export const NAV_JUMP_TO_INDEX = 'NAV_JUMP_TO_INDEX'
export const NAV_RESET = 'NAV_RESET'

// Authentication
export const LOGIN_SAVE_EMAIL = 'LOGIN_SAVE_EMAIL'
export const LOGIN_SAVE_PASSWORD = 'LOGIN_SAVE_PASSWORD'
export const API_LOGIN_REQUEST = 'API_LOGIN_REQUEST'
export const LOGOUT = 'LOGOUT'

/*
 * Action Creators
 */

// Navigation
export function navigatePush(key, next) {
	return {
		type: NAV_PUSH,
		state: {
			key,
			next
		}
	}
}

export function navigatePop() {
	return {
		type: NAV_POP
	}
}

export function navigateJumpToKey(key) {
	return {
		type: NAV_JUMP_TO_KEY,
		key
	}
}

export function navigateJumpToIndex(index) {
  return {
    type: NAV_JUMP_TO_INDEX,
    index
  }
}

export function navigateReset(index, routes) {
	return {
		type: NAV_RESET,
		index,
		routes
	}
}

// Authentication
export function loginSaveEmail(email) {
  return {
    type: LOGIN_SAVE_EMAIL,
    email
  }
}

export function loginSavePassword(pw) {
  return {
    type: LOGIN_SAVE_PASSWORD,
    pw
  }
}

export function apiLogin() {
  return {
    type: API_LOGIN_REQUEST
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

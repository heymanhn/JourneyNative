'use strict'

// Action Types
export const NAV_PUSH = 'NAV_PUSH'
export const NAV_POP = 'NAV_POP'
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY'
export const NAV_JUMP_TO_INDEX = 'NAV_JUMP_TO_INDEX'
export const NAV_RESET = 'NAV_RESET'
export const LOGIN_SAVE_EMAIL = 'LOGIN_SAVE_EMAIL'
export const LOGIN_SAVE_PASSWORD = 'LOGIN_SAVE_PASSWORD'
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'

// Navigation Action Creators
export function navigatePush(key, type) {
	return {
		type: NAV_PUSH,
		state: {
			key,
			type
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

// Authentication Action Creators
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

export function loginSubmit(password) {
  return {
    type: LOGIN_SUBMIT,
    password
  }
}

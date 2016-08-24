/*
 * If debugging on a remote device and hostname is a numerical IP address,
 * append xip.io to the hostname. Eg. https://192.168.1.64.xip.io:3000
 */
const journeyAPIHost = 'https://localhost:3000/v1'

export const journeyAPI = {
  login: {
    method: 'POST',
    route: journeyAPIHost + '/auth/login'
  }
}

export const initialNavState = {
  index: 0,
  routes: [
    { key: 'Intro', type: 'screen' }
  ]
}

export const initialAuthState = {
  isFetching: false
}

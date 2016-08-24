import { connect } from 'react-redux'

import LoginPasswordScreen from '../components/LoginPasswordScreen'
import { apiLogin, loginSavePassword } from '../actions'

const mapStateToProps = (state) => {
  return {
    error: state.authState.error ? state.authState.error.message : ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterPassword: (password) => {
      dispatch(loginSavePassword(password))
    },
    onSubmitPress: () => {
      dispatch(apiLogin())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPasswordScreen)

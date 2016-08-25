import { connect } from 'react-redux'

import SignupEmailScreen from '../components/SignupEmailScreen'
import { signupSaveEmail, navigatePush } from '../actions'

const mapStateToProps = (state) => {
  return {
    email: state.authState.newEmail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterEmail: (email) => {
      dispatch(signupSaveEmail(email))
    },
    onSubmitPress: () => {
      dispatch(navigatePush('SignupPassword'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupEmailScreen)

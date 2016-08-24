import { connect } from 'react-redux'

import SignupNameScreen from '../components/SignupNameScreen'
import { signupSaveName, navigatePush } from '../actions'

const mapStateToProps = (state) => {
  return {
    name: state.authState.newName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterName: (name) => {
      dispatch(signupSaveName(name))
    },
    onSubmitPress: () => {
      dispatch(navigatePush('SignupEmail'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupNameScreen)

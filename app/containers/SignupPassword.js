import { connect } from 'react-redux';

import SignupPasswordScreen from '../components/SignupPasswordScreen';
import { apiSignup, signupSavePassword, navigatePush } from '../actions';

const mapStateToProps = (state) => {
  return {
    error: state.authState.error ? state.authState.error.message : ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterPassword: (password) => {
      dispatch(signupSavePassword(password));
    },
    onSubmitPress: () => {
      dispatch(apiSignup());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPasswordScreen);

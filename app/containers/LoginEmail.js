import { connect } from 'react-redux';

import LoginEmailScreen from '../components/LoginEmailScreen';
import { loginSaveEmail, navigatePush } from '../actions';

const mapStateToProps = (state) => {
  return {
    email: state.authState.email
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterEmail: (email) => {
      dispatch(loginSaveEmail(email));
    },
    onSubmitPress: () => {
      dispatch(navigatePush('LoginPassword'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginEmailScreen);

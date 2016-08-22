import { connect } from 'react-redux'

import LoginPasswordScreen from '../components/LoginPasswordScreen'
import { loginSavePassword, loginSubmit, navigateReset } from '../actions'

const mapStateToProps = (state) => {
	return {
		password: state.authentication.password
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEnterPassword: (password) => {
			dispatch(loginSavePassword(password))
		},
		onSubmitPress: () => {
			dispatch(loginSubmit())
			dispatch(navigateReset(0, [{ key: 'Trips' }]))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPasswordScreen)

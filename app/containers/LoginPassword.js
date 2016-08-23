import { connect } from 'react-redux'

import LoginPasswordScreen from '../components/LoginPasswordScreen'
import { apiLogin, loginSavePassword, navigateReset } from '../actions'

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
			dispatch(apiLogin())
			dispatch(navigateReset(0, [{ key: 'Trips' }]))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPasswordScreen)

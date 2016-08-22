import { connect } from 'react-redux'

import LoginPasswordScreen from '../components/LoginPasswordScreen'
import { loginSubmit, navigateReset } from '../actions'

const mapStateToProps = (state) => {
	return {
		password: state.password
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEnterPassword: (password) => {
			dispatch(loginSavePassword(password))
		},
		onSubmitPress: () => {
			dispatch(loginSubmit())
			dispatch(navigateReset(0, [{ key: 'Trips', type: 'screen' }]))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPasswordScreen)

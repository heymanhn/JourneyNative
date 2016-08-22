import { connect } from 'react-redux'

import LoginEmailScreen from '../components/LoginEmailScreen'
import { loginSaveEmail, navigatePush } from '../actions'

const mapStateToProps = (state) => {
	return {
		email: state.email // Something is not right here
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEnterEmail: (email) => {
			dispatch(loginSaveEmail(email))
		},
		onSubmitPress: () => {
			dispatch(navigatePush('LoginPassword', 'form'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginEmailScreen)

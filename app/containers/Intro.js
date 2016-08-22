import { connect } from 'react-redux'

import IntroScreen from '../components/IntroScreen'
import { navigatePush } from '../actions'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginPress: () => {
			dispatch(navigatePush('LoginEmail', 'form'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IntroScreen)

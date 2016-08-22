import { connect } from 'react-redux'

import TripsScreen from '../components/TripsScreen'
import { logout, navigateReset } from '../actions'
import { initialNavState } from '../constants'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLogoutPress: () => {
			dispatch(logout())
			dispatch(navigateReset(initialNavState.index, initialNavState.routes))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TripsScreen)

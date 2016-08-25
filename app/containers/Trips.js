import { connect } from 'react-redux'

import TripsScreen from '../components/TripsScreen'
import { logout, navigateReset } from '../actions'
import { initialNavState } from '../constants'

const mapStateToProps = (state) => {
  return {
    user: state.authState.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutPress: () => {
      dispatch(navigateReset(initialNavState.index, initialNavState.routes))
    },
    resetViewsOnLoad: () => {
      dispatch(navigateReset(0, [{ key: 'Trips'}]))
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsScreen)

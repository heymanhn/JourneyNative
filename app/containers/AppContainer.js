'use strict'

import React, { Component, PropTypes } from 'react'
import {
	Image,
	NavigationExperimental,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native'
import { connect } from 'react-redux'

import Intro from './Intro'
import LoginEmail from './LoginEmail'
import LoginPassword from './LoginPassword'
import Trips from './Trips'
import { navigatePush, navigatePop, navigateReset } from '../actions'

const {
	Transitioner: NavigationTransitioner,
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental

class AppContainer extends Component {
	render() {
		let { navigationState, backAction } = this.props

		return (
			<NavigationTransitioner
				navigationState={navigationState}
				style={styles.container}
				render={props => (
					<View style={styles.container}>
						<NavigationCard
							{...props}
							onNavigateBack={backAction}
							renderScene={this.renderScene}
							key={props.scene.route.key}
						/>
						<NavigationHeader
							{...props}
							style={styles.header}
							onNavigateBack={backAction}
							renderLeftComponent={this.renderBackButtonComponent}
							renderRightComponent={this.renderNextButtonComponent.bind(this)}
						/>
					</View>
				)}
			/>
		)
	}

	renderScene({ scene }) {
		const { route } = scene

		switch(route.key) {
  		case 'Intro':
  			return <Intro />
  		case 'LoginEmail':
  			return <LoginEmail />
  		case 'LoginPassword':
  			return <LoginPassword />
  		case 'Trips':
  			return <Trips />
  	}
	}

	renderBackButtonComponent(props) {
		if (props.scene.index === 0 || !props.onNavigateBack) {
			return null
		}

		return (
			<TouchableHighlight
				activeOpacity={0.5}
				underlayColor={'#ffe945'}
				onPress={props.onNavigateBack}
			>
				<Image
					source={require('../assets/back-button.png')}
					style={styles.backButton}
				/>
			</TouchableHighlight>
		)
	}

	renderNextButtonComponent(props) {
		let next = props.scene.route.next

		if (!next) {
			return null
		}

		let onPressAction = () => {
			switch (next) {
				case 'LoginPassword':
					return this.props.pushAction(next, 'Trips')
				case 'Trips':
					return this.props.resetAction([{ key: 'Trips' }])
				default:
					return null
			}
		}

		return (
			<TouchableHighlight
				activeOpacity={1.0}
				underlayColor={'#ffe945'}
				onPress={onPressAction}
			>
   			<Text style={styles.nextButton}>
      		Next
      	</Text>
   		</TouchableHighlight>
		)
	}
}

AppContainer.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired,
	pushAction: PropTypes.func.isRequired,
	resetAction: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderBottomWidth: 0
	},
	backButton: {
		margin: 10
	},
	nextButton: {
		fontSize: 16,
		margin: 10
	}
})

export default connect(
	state => ({
		navigationState: state.navigationState
	}),
	dispatch => ({
		backAction: () => {
			dispatch(navigatePop())
		},
		pushAction: (key, next) => {
			dispatch(navigatePush(key, next))
		},
		resetAction: (routes) => {
			dispatch(navigateReset(0, routes))
		}
	})
)(AppContainer)

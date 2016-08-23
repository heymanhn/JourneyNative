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
import { apiLogin, navigatePush, navigatePop } from '../actions'

const {
	CardStack: NavigationCardStack,
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental

class AppContainer extends Component {
	render() {
		let { navigationState } = this.props

		return (
			<NavigationCardStack
				navigationState={navigationState}
				renderOverlay={props => (
					<NavigationHeader
						{...props}
						style={styles.header}
						renderLeftComponent={this.renderBackButtonComponent.bind(this)}
						renderRightComponent={this.renderNextButtonComponent.bind(this)}
					/>
				)}
				renderScene={this.renderScene}
				style={styles.container}
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
		if (props.scene.index === 0 || props.scene.route.key === 'Trips') {
			return null
		}

		return (
			<TouchableHighlight
				activeOpacity={0.5}
				underlayColor={'#ffe945'}
				onPress={this.props.backAction}
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
					this.props.loginAction()
					return this.props.pushAction(next)
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
	loginAction: PropTypes.func.isRequired,
	pushAction: PropTypes.func.isRequired
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
		loginAction: () => {
			dispatch(apiLogin())
		},
		pushAction: (key, next) => {
			dispatch(navigatePush(key, next))
		}
	})
)(AppContainer)

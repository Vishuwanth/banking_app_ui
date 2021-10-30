import React from 'react'
import TouchScreen from './src/screens/TouchScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons } from '@expo/vector-icons'

import PinScreen from './src/screens/PinScreen'
import HomeScreen from './src/screens/HomeScreen'
import SendRequestScreen from './src/screens/SendRequestScreen'

import CardsScreen from './src/screens/CardsScreen'

export default function App() {
	const AppStack = createStackNavigator()
	const TabStack = createBottomTabNavigator()

	const screenOptions = ({ route }) => ({
		tabBarStyle: {
			backgroundColor: '#1e1e1e',
			borderTopColor: '#1e1e1e',
			paddingVertical: 8,
		},
		tabBarIcon: ({ focused }) => {
			let icon = ''
			const color = focused ? '#559dff' : '#828282'
			const size = 24

			switch (route.name) {
				case 'Cards':
					icon = 'credit-card'
					break
				case 'SendRequest':
					icon = 'send'
					break
				default:
					icon = 'dashboard'
			}

			return <MaterialIcons name={icon} size={size} color={color} />
		},
	})

	const TabStackScreens = () => {
		return (
			<TabStack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
				<TabStack.Screen
					name='Home'
					options={{ headerShown: false }}
					component={HomeScreen}
				/>
				<TabStack.Screen
					name='SendRequest'
					options={{ headerShown: false, title: 'Send & Request' }}
					component={SendRequestScreen}
				/>
				<TabStack.Screen
					name='Cards'
					options={{ headerShown: false, title: 'My Cards' }}
					component={CardsScreen}
				/>
			</TabStack.Navigator>
		)
	}

	return (
		<NavigationContainer>
			<AppStack.Navigator>
				<AppStack.Screen
					options={{ headerShown: false }}
					name='Touch'
					component={TouchScreen}
				/>
				<AppStack.Screen
					options={{ headerShown: false }}
					name='Pin'
					component={PinScreen}
				/>
				<AppStack.Screen
					options={{ headerShown: false }}
					name='Home'
					component={HomeScreen}
				/>
				<AppStack.Screen
					options={{ headerShown: false }}
					name='Tabs'
					component={TabStackScreens}
				/>
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

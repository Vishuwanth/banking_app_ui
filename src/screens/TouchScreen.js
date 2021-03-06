import React from 'react'

import styled from 'styled-components/native'
import { Fontisto, MaterialIcons } from '@expo/vector-icons'
import TextStyle from '../components/Text'

export default TouchScreen = ({ navigation }) => {
	return (
		<Container>
			<TextStyle center heavy title color='#964ff0' margin='32px 0 0 0'>
				mybank
			</TextStyle>
			<Touch>
				<Circle bgColor='#1e1e1e'>
					<Circle bgColor='#5196F405'>
						<Circle bgColor='#5196F410'>
							<Circle bgColor='#5196F430'>
								<TouchButton
									onLongPress={() => navigation.navigate('Tabs')}
									delayPressIn={0}>
									<MaterialIcons name='fingerprint' size={64} color='#ffffff' />
								</TouchButton>
							</Circle>
						</Circle>
					</Circle>
				</Circle>
			</Touch>

			<TextStyle center heavy large>
				Touch Id Sensor for access to {'\n'} your myBank account
			</TextStyle>
			<TextStyle center bold margin='16px 0 0 0 ' color='#9c9c9f'>
				Please verify your identity {'\n'} using touch ID
			</TextStyle>

			<PinAccess
				onLongPress={() => navigation.navigate('Pin')}
				delayPressIn={0}>
				<Fontisto name='locked' color='#964ff0' size={16} />
				<TextStyle bold margin='0 0 0 8px' color='#964ff0'>
					Enter Access Pin
				</TextStyle>
			</PinAccess>
			<StatusBar barStyle='light-content' />
		</Container>
	)
}

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #1e1e1e;
	padding: 40px 0;
`

const Touch = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
	justify-content: center;
`
const Circle = styled.View`
	background-color: ${(props) => props.bgColor};
	padding: 32px;
	border-radius: 999px;
`

const TouchButton = styled.TouchableOpacity`
	background-color: #5196f4;
	padding: 8px;
	border-radius: 100px;
`
const PinAccess = styled.TouchableOpacity`
	margin-top: 16px;
	padding-top: 16px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

const StatusBar = styled.StatusBar``

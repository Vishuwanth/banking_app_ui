import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Fontisto, MaterialIcons } from '@expo/vector-icons'
import TextStyle from '../components/Text'
import NumberPad from '../components/NumberPad'

const PinScreen = ({ navigation }) => {
	const [pinCount, setPinCount] = useState(0)
	const totalPins = 6

	useEffect(() => {
		if (pinCount === totalPins) {
			navigation.navigate('Tabs')
		}
	}, [pinCount])

	const renderPins = () => {
		const pins = []

		for (let x = 1; x < totalPins; x++) {
			pins.push(
				x <= pinCount ? (
					<PinContainer key={x}>
						<Pin />
					</PinContainer>
				) : (
					<PinContainer key={x} />
				)
			)
		}
		return pins
	}

	const pressKey = (_, index) => {
		setPinCount((prev) => {
			if (0 <= index <= 6) {
				return index !== 10 ? prev + 1 : prev - 1
			} else {
				return prev
			}
		})
		console.log(pinCount)
	}

	return (
		<Container>
			<TextStyle center heavy title color='#964ff0' margin='32px 0 0 0'>
				mybank
			</TextStyle>
			<TextStyle center heavy medium margin='32px 0 0 0'>
				Enter Your PIN code
			</TextStyle>

			<AccessPin>{renderPins()}</AccessPin>
			<TextStyle center bold margin='8px 0 0 0' color='#9c9c9f'>
				Forgot PIN?
			</TextStyle>
			<UseTouch onPress={() => navigation.navigate('Touch')}>
				<Fontisto name='locked' color='#964ff0' size={16} />
				<TextStyle bold margin='0 0 0 8px' color='#964ff0'>
					Use TOUCH ID
				</TextStyle>
			</UseTouch>

			{/* NUmber pad */}
			<NumberPad onPress={pressKey} />

			<StatusBar barStyle='light-content' />
		</Container>
	)
}

export default PinScreen

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #1e1e1e;
	padding: 40px 0;
`
const AccessPin = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin: 32px 64px 16px 64px;
`

const UseTouch = styled.TouchableOpacity`
	margin: 32px 0 0 0;
	flex-direction: row;
	justify-content: center;
	align-self: center;
`

const PinContainer = styled.View`
	width: 16px;
	height: 16px;
	border-radius: 8px;
	border: 1px;
	align-items: center;
	justify-content: center;
	border-color: #5196f450;
`

const Pin = styled.View`
	width: 8px;
	height: 8px;
	border-radius: 4px;
	background-color: #5196f4;
`

const StatusBar = styled.StatusBar``

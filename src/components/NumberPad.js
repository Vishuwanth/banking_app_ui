import React from 'react'
import styled from 'styled-components/native'
import TextStyle from './Text'
import { MaterialIcons } from '@expo/vector-icons'

const NumberPad = ({ onPress }) => {
	var buttons = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		<MaterialIcons name='keyboard-backspace' size={24} />,
	]

	return (
		<KeyPad>
			{buttons &&
				buttons.map((item, index) => (
					<Number
						key={index}
						onPress={() => onPress(item, index)}
						delayPressIn={0}>
						<TextStyle large heavy>
							{item}
						</TextStyle>
					</Number>
				))}
		</KeyPad>
	)
}

export default NumberPad

const KeyPad = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-end;
	margin: 30px;

	padding: 16px;
`

const Number = styled.TouchableOpacity`
	width: 64px;
	height: 64px;
	border-radius: 32px;
	align-items: center;
	justify-content: center;
	margin: 10px 20px;
	border: 1px solid #ffffff20;
`

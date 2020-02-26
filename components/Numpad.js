import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { styles } from '../screens/styleSheet'
import { NumpadButton } from './NumpadButton'


const Numpad = props => {
  return (
    <View>
      <View>
        <NumpadButton value={10} onButtonPress={this.buttonPressHandler.bind(this, 10)} />
        {/* <NumpadButton value={2} onButtonPress={this.buttonPressHandler} />
        <NumpadButton value={3} onButtonPress={this.buttonPressHandler} />
        </View>
        <View>
        <NumpadButton value={4} onButtonPress={this.buttonPressHandler} />
        <NumpadButton value={5} onButtonPress={this.buttonPressHandler} />
        <NumpadButton value={6} onButtonPress={this.buttonPressHandler} />
        </View>
        <View>
        <NumpadButton value={1} onButtonPress={this.buttonPressHandler} />
        <NumpadButton value={1} onButtonPress={this.buttonPressHandler} />
        <NumpadButton value={1} onButtonPress={this.buttonPressHandler} />
        </View>
        <View>
        <NumpadButton value={1} onButtonPress={this.buttonPressHandler} />
        <NumpadButton value={1} onButtonPress={this.buttonPressHandler} />
        <NumpadButton value={1} onButtonPress={this.buttonPressHandler} />*/}
      </View>
    </View>
  )
}


export default Numpad;
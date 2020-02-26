import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { styles } from '../screens/styleSheet'

const NumpadButton = props => {
  return (
    <TouchableHighlight
      activeOpacity = {0.3}
      underlayColor = '#DDDDDD'
      onPress={props.onButtonPress.bind(this, props.value)}
      style={styles.compareNumberButton} >
      <Text style={{textAlign: 'center', fontSize: 25}}>{props.value}</Text>
    </TouchableHighlight>
  );
}

/*
<TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 0})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>0</Text>
            </TouchableHighlight>
            */

export default NumpadButton;
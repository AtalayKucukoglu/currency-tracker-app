import React from 'react'
import { TouchableHighlight, Text, Image, View } from 'react-native'
import { styles } from '../screens/styleSheet'

const NumpadButton = props => {
  return (
    <TouchableHighlight
      activeOpacity = {0.3}
      underlayColor = '#DDDDDD'
      onPress={props.onButtonPress.bind(this, props.value)}
      style={styles.compareNumberButton} >
        {
          props.value === 'backspace' ?
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              source= {require('../images/backspace_icon.png')}/>
          </View>
          :

          <Text style={{textAlign: 'center', fontSize: 30}}>{props.value}</Text>
        }
      
    </TouchableHighlight>
  );
}

export default NumpadButton;
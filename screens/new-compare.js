import React, { Component } from 'react'
import { 
  Text,
  View,
  Picker,
  ImageBackground,
  } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import {styles} from './styleSheet'


export default class CompareScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        base: '',
        against: '',
        rate: 0,
        names: ["AUD", "BGN", "BRL", "CAD", 
        "CHF", "CNY", "CZK", "DKK", "GBP", "HKD",
         "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY",
          "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN",
           "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"],
        apiURL: "https://api.exchangeratesapi.io/",
      }
    }

    componentDidMount() {
      this.fetchData();
    }
  
    async fetchData() {
      let fetchURL = this.state.apiURL + 'latest?symbols=' + this.state.against + '&base=' + this.state.base;
      console.log("FETCH URL: " + fetchURL);
      let responseJSON = await fetch(fetchURL);
      let responseJS = await responseJSON.json();
      let rate = responseJS.rates[this.state.against];
      this.setState({rate});
    }

    getCurrencyLabels() {
      return this.state.names.map((item, i) => {
        return (<Picker.Item key={i+1} label={item} value={item} />)
        }
      ) 
    }

    render() {
      return(
        <ImageBackground 
        source={require('../images/background-dark.jpg')} 
        style={styles.backgroundImage}>
          <View>
            <TouchableHighlight style={styles.compareNumberButton} >
              <Text> 1</Text>
            </TouchableHighlight>
          </View>
          <View>

          </View>
          <View>

          </View>
          <View>

          </View>
        </ImageBackground>
      )
    }
  }
  
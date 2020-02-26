import React, { Component } from 'react'
import { 
  Text,
  View,
  Picker,
  ImageBackground,
  TouchableHighlight,
  } from 'react-native'
import {styles} from './styleSheet'
import NumpadButton from '../components/NumpadButton'
import Numpad from '../components/Numpad'

export default class CompareScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        base: 'EUR',
        against: 'USD',
        rate: 0,
        names: ["AUD", "BGN", "BRL", "CAD", 
        "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD",
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

    doBackSpace = () => {
      let input = this.state.input;
      input = input.slice(0, -1);
      this.setState({input: input});
    }

    calculateCurrency = () => {
      if (this.state.input === '') return ''; 
      let result = parseInt(this.state.input) * this.state.rate;
      result = result.toFixed(2);
      return result;
    }

    buttonPressHandler = (value) => {
      if (value === 'backspace') this.doBackSpace();
      else this.setState({input: this.state.input + value})
    }


    render() {
      return(
        <ImageBackground source={require('../images/background-dark.jpg')} style={styles.backgroundImage}>          
          <View style={{height:'100%', width: '100%', justifyContent: 'space-between',}}>
            <View style={{marginHorizontal: '2%'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0%', marginTop: 20, marginHorizontal: 20}}>
                <View style={{}}>
                  <Picker
                    mode='dialog' 
                    onValueChange= {(itemValue, itemIndex) =>
                      this.setState({base: itemValue}, async () => {
                        await this.fetchData()
                    })}
                    selectedValue={this.state.base}
                    style={{height: 50, width: 100, color: 'white', 
                    transform: [
                      { scaleX: 1.3 },
                      { scaleY: 1.3 },
                      ]}}
                    >
                      {
                      this.state.names ? this.getCurrencyLabels() : null
                      }
                  </Picker>
                </View>
                <View style={{ width: '70%'}}>
                  <Text
                    numberOfLines= {1}
                    adjustsFontSizeToFit={true}
                    style={{ fontSize: 35, color: 'white', textAlign: 'right'}}>
                  {this.state.input} 
                  </Text>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '0%', marginTop: 20, marginHorizontal: 20}}>
                  <Picker 
                    mode='dialog' 
                    onValueChange= {(itemValue, itemIndex) =>
                      this.setState({against: itemValue}, async () => {
                        await this.fetchData()
                    })}              
                    selectedValue={this.state.against}
                    style={{height: 50, width: 100, color: 'white', 
                    transform: [
                      { scaleX: 1.3 }, 
                      { scaleY: 1.3 },
                    ]}}
                    >
                      {
                      this.state.names ? this.getCurrencyLabels() : null
                      }
                  </Picker>
                  <View style={{ width: '70%'}}>
                    <Text 
                      numberOfLines={1} 
                      style={{ fontSize: 45, color: 'white', textAlign: 'right'}}>
                      {this.calculateCurrency()}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              {/* <Numpad onButtonPress={this.buttonPressHandler}/>         */}
              <View style={styles.compareNumberRow}>
                <NumpadButton value={1} onButtonPress={this.buttonPressHandler} />
                <NumpadButton value={2} onButtonPress={this.buttonPressHandler} />
                <NumpadButton value={3} onButtonPress={this.buttonPressHandler} />
              </View>  
              <View style={styles.compareNumberRow}>
                <NumpadButton value={4} onButtonPress={this.buttonPressHandler} />
                <NumpadButton value={5} onButtonPress={this.buttonPressHandler} />
                <NumpadButton value={6} onButtonPress={this.buttonPressHandler} />
              </View>
                
              <View style={styles.compareNumberRow}>
                <NumpadButton value={7} onButtonPress={this.buttonPressHandler} />
                <NumpadButton value={8} onButtonPress={this.buttonPressHandler} />
                <NumpadButton value={9} onButtonPress={this.buttonPressHandler} />
              </View>
              <View style={styles.compareNumberRow}>
                <NumpadButton value={'.'} onButtonPress={this.buttonPressHandler} />
                <NumpadButton value={0} onButtonPress={this.buttonPressHandler} />
                <NumpadButton value={'backspace'} onButtonPress={this.buttonPressHandler} />
              </View>
            </View>
          </View>
        </ImageBackground>
      )
    }
  }
  
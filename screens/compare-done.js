import React, { Component } from 'react'
import { 
  Text,
  View,
  Picker,
  ImageBackground,
  TouchableHighlight,
  } from 'react-native'
import {styles} from './styleSheet'


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
          <View style={styles.compareNumberRow}>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 1})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 2})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 3})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>3</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.compareNumberRow}>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 4})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 5})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 6})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>6</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.compareNumberRow}>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 7})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 8})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 9})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>9</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.compareNumberRow}>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + '.'})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 40}}>.</Text>
            </TouchableHighlight>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.setState({input: this.state.input + 0})}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight
            activeOpacity = {0.3}
            underlayColor = '#DDDDDD'
            onPress={() => this.doBackSpace()}
            style={styles.compareNumberButton} >
              <Text style={{textAlign: 'center', fontSize: 25}}>Backspace</Text>
            </TouchableHighlight>
          </View>
          </View>
          </View>
        </ImageBackground>
      )
    }
  }
  
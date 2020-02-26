import React, { Component } from 'react'
import { 
  Text,
  View,
  Picker,
  ImageBackground,
  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
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
        <ImageBackground source={require('../images/background-dark.jpg')} style={styles.backgroundImage}>
            {this.state.rate ? 
            <View>
              <Text style={{marginTop: '20%', color: 'white', fontSize: 25, textAlign: 'center',}} > 1 {this.state.base} is {this.state.rate} {this.state.against}</Text>
              <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(  
                      'Exchange', {base: this.state.base, against: this.state.against, rate: this.state.rate})}
                    style={styles.compareSeeDetails}>
                    <Text style={{fontSize: 25, textAlign: 'center', color: 'white' }}>See Details</Text>
                    </TouchableOpacity>
            </View>
            :
            null }
          <View style={{marginTop: '35%', alignItems: 'center',}}>
            <Text style={styles.compareBaseTitle} >Select Base Currency</Text>
            <Picker 
            mode='dialog' 
            onValueChange= {(itemValue, itemIndex) =>
              this.setState({base: itemValue}, async () => {
                await this.fetchData()
            })}              
            selectedValue={this.state.base}
            style={{height: 50, width: 120, color: 'white',}}
            >
              <Picker.Item key={0} label='Select' value=''/>
              {
              this.state.names ? this.getCurrencyLabels() : null
              }
            </Picker>
          </View>
          <View style={{marginTop: '5%', alignItems: 'center', width: '100%', }}>
            <Text style={styles.compareAgainstTitle} >Select Compared Currency</Text>
            <Picker 
              mode='dialog' 
              onValueChange= {(itemValue, itemIndex) =>
                this.setState({against: itemValue}, async () => {
                  await this.fetchData()
              })}              
              selectedValue={this.state.against}
              style={{height: 50, width: 120, color: 'white',}}
              >
                <Picker.Item key={0} label='Select' value=''/>

                {
                this.state.names ? this.getCurrencyLabels() : null
                }
            </Picker>
          </View>
        </ImageBackground>
      )
    }
  }
  
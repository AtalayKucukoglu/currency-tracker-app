import React, { Component } from 'react'
import {styles} from './styleSheet'
import { 
  Text,
  View, 
  ScrollView, 
  FlatList,
  Button,
  TouchableOpacity,
  Picker,
  ImageBackground,
  ActivityIndicator,
} from 'react-native'



export default class ListAllScreen extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { 
        apiURL: 'https://api.exchangeratesapi.io/latest',
        base: 'EUR',
        rates: [],
        isDataFetched: false,
      }
    }
    
    componentDidMount() {
      this.fetchData();
    }
  
    async fetchData() {
      try {
        let fetchURL = this.state.apiURL + '?base=' + this.state.base;
        console.log("FETCH URL: " + fetchURL);
        let responseJSON = await fetch(this.state.apiURL + '?base=' + this.state.base);
        let responseJS = await responseJSON.json();
        console.log(responseJS);
        let rates = [];
        let temp = {}
        for (let key in responseJS.rates) {
          if (key === this.state.base) continue;
          temp = {name: key, rate: responseJS.rates[key]};
     //     console.log(temp.name + " " + temp.rate);
          rates.push(temp);
        }
        //console.log(rates);
  
        // sorts the rates in alphabetical order
        rates.sort(
          (ele1, ele2) => ele1.name < ele2.name ? 
          -1 : ((ele1.name > ele2.name) ? 1 : 0));
  
        this.setState({rates: rates, isDataFetched: true});
  
      //  console.log("STATES: \n", this.state);
  
      } catch(error) {
        console.error(error);
      }
    }
  
    getCurrencyLabels() {
      return this.state.rates.map((item, i) => {
        console.log(item);
        return (<Picker.Item key={i+1} label={item.name} value={item.name} />)
        }
      ) 
    }
  
    render() {
      if (!this.state.isDataFetched) {
        return (
          <ImageBackground source={require('../images/background-dark.jpg')} style={styles.backgroundImage}>
            <View style={{marginTop:'70%'}}>
              <ActivityIndicator 
              size='large' 
              color='#0000ff' 
              style={{transform:[{ scaleX: 2 }, { scaleY: 2 }]}} />
            </View>
          </ImageBackground>
        )
      }

      return (
        <ImageBackground source={require('../images/background-dark.jpg')} style={styles.backgroundImage}>
          <View>
            <Picker
              mode = 'dropdown'
              selectedValue={this.state.base}
              style={{marginLeft: 40, height: 50, width: 150, color: 'white',
              transform: [
                { scaleX: 1.5 },
                { scaleY: 1.5 },
                ]}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({base: itemValue}, async () => {
                  await this.fetchData()
              })}>
              <Picker.Item key={0} label='Select Base' value='EUR'/>
              {
                this.state.rates ? this.getCurrencyLabels() : null
              }
          </Picker>
            <Text
            style = {styles.baseHeader}
            >
              Base: {this.state.base}
            </Text>
            <FlatList
              style = {{marginBottom: 83, marginTop: 15 }}
              data = {this.state.rates}
              keyExtractor = {(item, index) => index.toString()}
              renderItem = {({item, index}) => {
                console.log(item);
                return (
                  <View>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(
                      'Exchange', {base: this.state.base, against: item.name, rate: item.rate})}
                    style={styles.listItem}>
                    <Text style={{fontSize: 25, }}>{item.name}: {item.rate}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>
        </ImageBackground>
      )
    }
  }
  
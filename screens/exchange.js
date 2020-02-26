import React, { Component } from 'react'
import { 
  Text,
  View,
  ImageBackground,
  } from 'react-native'
import { LineChart, XAxis, YAxis, Grid } from 'react-native-svg-charts'
import DatePicker from 'react-native-datepicker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from './styleSheet'


export default class ExchangeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        base: this.props.navigation.getParam('base'),
        against: this.props.navigation.getParam('against'),
        rate: this.props.navigation.getParam('rate'),
        apiURL: "https://api.exchangeratesapi.io/",
        isFirstFetch: true,
      }
    }

    componentDidMount() {
      this.fetchData();
    }
  
    async fetchData() {
      try {
        await this.updateDate();
        let fetchURL = this.state.apiURL + "history?start_at=" + this.state.startDate
                      + "&end_at=" + this.state.endDate
                      + "&symbols=" + this.state.against + "&base=" + this.state.base;
        console.log("FETCH URL: " + fetchURL);
        let responseJSON = await fetch(fetchURL);
        let responseJS = await responseJSON.json();
        let against = this.state.against;
        let rates = [];
        let temp = {};
        for (let key in responseJS.rates) {
          temp = {date: key, rate: responseJS.rates[key][against]};
          console.log(temp);
          rates.push(temp);
        }
      //  sorts the rates in chronological order
        rates.sort(function(a, b) {
          let dateA = new Date(a.date), dateB = new Date(b.date);
          return dateA - dateB;
        });
        this.setState({rates});
        console.log(this.state)
      }
       catch(error) {
        console.error(error);
      }
    }

    updateDate () {
      let endDate;
      let startDate;
      if (this.state.isFirstFetch) {
        endDate = new Date(); // end date is today
        startDate = new Date(); // start date is a week ago
        startDate.setDate(startDate.getDate() - 7);
        endDate = endDate.toJSON().slice(0,10);
        startDate = startDate.toJSON().slice(0,10);
        this.setState({isFirstFetch: !this.state.isFirstFetch});
      } else {
        endDate = this.state.endDate;
        startDate = this.state.startDate;
      }
      this.setState({startDate, endDate});
      return;
    }

    render() {

        const axesSvg = { fontSize: 10, fill: '#666' };
        const verticalContentInset = { top: 10, bottom: 10 };
        const xAxisHeight = 30;
        let rates = [];
        let dates = [];        
       if (this.state.rates) {
            this.state.rates.map((item) => {
            rates.push(item.rate);
            dates.push(item.date);
          })
       }
        console.log("in render: ", rates, dates);

        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.

        return (
          <ImageBackground source={require('../images/background.jpg')} style={styles.backgroundImage}>
          <View>
            <Text
              style = {styles.baseHeader}
              >
              Base: {this.state.base}
            </Text>
            <View style={styles.exchangeTitle}>
              <Text style={{fontSize: 25, color: 'white'}}>
               {this.state.against}: {this.state.rate}
              </Text>
            </View>
            </View>
            <View style={{ height: 300, padding: 20, flexDirection: 'row' }}>
                <YAxis
                    data={rates}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                    numberOfTicks	= {5}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={rates}
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        numberOfTicks = {10}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={dates}
                        formatLabel = {(index) => dates[index]}
                        contentInset={{ left: 30, right: 10 }}
                        svg={axesSvg}
                        numberOfTicks	= {5}
                    />
                </View>
            </View>
            <View>
              <View style={styles.exchangeTitle}>
                  <Text style={{fontSize: 25, color: 'white'}}>Select Date</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems:'center', 
                    justifyContent:'space-between', marginVertical: 5, marginHorizontal: 20}}>
                <Text style={{fontSize: 15,}}>From:</Text>
                <DatePicker
                style={{width: '35%'}}
                date={this.state.startDate}
                mode="date"
                placeholder="Select Date"
                format="YYYY-MM-DD"
                minDate="2016-01-01"
                // max date is today
                maxDate= {new Date().toJSON().slice(0,10)}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                  }
                }}
                onDateChange={(date) =>
                  this.setState({startDate: date}, async () => {
                    await this.fetchData()
                })}
                />
                <Text style={{fontSize: 15}}>To:</Text>
                <DatePicker
                  style={{width: '35%'}}
                  date={this.state.endDate}
                  mode="date"
                  placeholder="Select Date"
                  format="YYYY-MM-DD"
                  minDate="2016-01-01"
                  // max date is today
                  maxDate= {new Date().toJSON().slice(0,10)}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      
                    }
                  }}
                  onDateChange={(date) =>
                    this.setState({endDate: date}, async () => {
                      await this.fetchData()
                  })}
                  />
              </View>
            </View>
          </ImageBackground>
        )
    }
  }
  
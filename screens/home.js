import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Modal } from 'react-native'
import { styles } from './styleSheet'
import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {

  checkLogin = () => {
    const username = this.state.username;
    const password = this.state.password;
    const user = this.state.users.find( user => user.username === username);
    if (!user) {
      this.setState({isInvalidLogin: true})
      return false;
    }
    else if (user.password === password) {
      this.setState({isLoggedIn:  true, isLoggingIn: false, isInvalidLogin: false,});
      return true;
    }
  }

  render() {
    return (
      <ImageBackground source={require('../images/background.jpg')} style={styles.backgroundImage}>
        <View style={{
          // backgroundColor: '#333388',
          paddingBottom: 100,
        }}>
{/*           
          {
            !this.state.isLoggedIn && !this.state.isInvalidLogin ? 
          <View style={{ flexDirection: 'row', marginTop: '5%', marginHorizontal: '5%', justifyContent: 'flex-end' }}>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => this.setState({ isLoggingIn: true })}
            // style={styles.homePageLoginButton}
            >
              <Text style={styles.homePageLoginText}>Login or Signup</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={{ flexDirection: 'row', marginTop: '5%', marginHorizontal: '5%', justifyContent: 'flex-end' }}>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => this.setState({ isLoggingIn: true })}
            // style={styles.homePageLoginButton}
            >
              <Text style={styles.homePageLoginText}>Hey, {this.state.username}!</Text>
            </TouchableOpacity>
          </View>
          }    */}
          <View>
            <Text style={styles.homePageTitle}>Welcome To{'\n'}Currency Tracker</Text>
          </View>
          {!this.state.isLoggingIn ?
            <View>
              <TouchableOpacity activeOpacity={0.3} onPress={() => this.props.navigation.navigate(
                'List All')}
                style={styles.homePageButton}>
                <Text style={styles.homePageButtonText}>List All Exchanges</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.3} onPress={() => this.props.navigation.navigate(
                'Compare')}
                style={styles.homePageButton}>
                <Text style={styles.homePageButtonText}>Compare Currencies</Text>
              </TouchableOpacity>
            </View>
            :
            null
          }
        </View>

        {/*login page*/}

        {/* 
        <Modal
          visible={this.state.isLoggingIn}
          animationType='slide'
          transparent={true}
        >
          <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#A3C7F7' }}>
            {
              this.state.isInvalidLogin ? 
              <Text>
                Invalid username or password.
              </Text>
              :
              null
            }
            <Text style={styles.loginText} >Username</Text>
            <TextInput
              placeholder="Username"
              clearButtonMode='while-editing'
              style={styles.loginInput}
              onChangeText={(input) => this.setState({ username: input })}
              value={this.state.username}
            />
            <Text style={styles.loginText} >Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.loginInput}
              onChangeText={(input) => this.setState({ password: input })}
              value={this.state.password}
            // onChangeText={}
            // value={}
            />
            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity
                onPress={() => this.setState({ isLoggingIn: false })}
                style={styles.loginCancelButton}>
                <Text style={{ fontSize: 20, color: 'white', }}>
                  Cancel
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.checkLogin}
                style={styles.loginLoginButton}>
                <Text style={{ fontSize: 20, color: '#3B6BEF', }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: '5%' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>
                or <Text style={{ textDecorationLine: "underline", fontWeight: 'bold' }}> Signup</Text>
              </Text>
            </View>
          </View>
        </Modal> */}
      </ImageBackground>
    )
  }
}
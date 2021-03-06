import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#B4EFFD',
    paddingHorizontal: '10%',
    paddingVertical: '1.5%',
    marginBottom: 10,
    marginLeft: 10,
    borderRadius: 40,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  homePageTitle: {
    fontSize: 40,
    textAlign: 'right',
    paddingVertical: 20,
    textShadowColor: '#96C290',
    textShadowRadius: 10,
    color: 'white',
    marginTop: '15%',
    marginBottom: '50%',
    marginHorizontal: '5%',
  },
  homePageLoginButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 40,
    width: '40%',
    height: 50,
    fontSize: 20,
    justifyContent:'center',
    alignItems: 'center'
  },
  homePageLoginText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  homePageButton: {
    width: "80%",
    // borderWidth: 1,
    // borderColor: '#96C290',
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: "2%",
    paddingHorizontal: '5%',
    marginVertical: '5%',
    marginHorizontal: '21%',
  },
  homePageButtonText: {
    color: '#3B6BEF',
    fontSize: 28,
    textAlign: 'center',
  },
  loginText: {
    fontSize: 25, 
    margin: 10, 
    color: 'white',
  },
  loginInput: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    height: 50,
    paddingHorizontal: 15,
    fontSize: 20
  },
  loginCancelButton: {
    backgroundColor: '#FF5160',
    borderRadius: 40,
    width: '40%',
    height: 50,
    padding: 5,
    fontSize: 20,
    justifyContent:'center',
    alignItems: 'center'
  },
  loginLoginButton: {
    backgroundColor: 'white',
    borderRadius: 40,
    width: '40%',
    height: 50,
    padding: 5,
    fontSize: 20,
    justifyContent:'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  baseHeader: {
    padding: 3,
    textAlign: 'center', 
    fontSize: 27, 
    backgroundColor: "#8DCCD5", 
    color: "#466CBF", 
    fontWeight: 'bold',
  },
  exchangeTitle: {
    backgroundColor: '#466CBF',
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 40,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  exchangeSubTitle: {
    backgroundColor: '#8DCCD5',
    color: "#466CBF", 
    padding: 5,
    borderRadius: 40,
    fontSize: 20
  },
  compareAgainstTitle: {
    width: '100%',
    backgroundColor: '#8DCCD5',
    color: 'white',
    paddingHorizontal: '10%',
    paddingVertical: '1.5%',
    marginBottom: 10,
    marginLeft: 10,
    textAlign: 'center',
 //   borderRadius: 40,
    fontSize: 25,
  },
  compareBaseTitle: {
    width: '100%',
    backgroundColor: '#8DCCD5',
    color: 'white',
    paddingHorizontal: '10%',
    paddingVertical: '1.5%',
    marginBottom: 10,
    marginLeft: 10,
    textAlign: 'center',
 //   borderRadius: 40,
    fontSize: 25,
  },
  compareSeeDetails: {
    fontSize: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#466CBF',
    color: 'white',
    borderRadius: 40,
    marginTop: '5%', 
  },
  compareNumberRow: {
    height: '15%',
    flexDirection: 'row',
  },
  compareNumberButton: {
    width: '33.33333%',
    backgroundColor: 'white',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    justifyContent: 'center',
  }
})


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from './src/components/header';
import Footer from './src/components/Footer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends React.Component {
  render() {
    return (
        <View style={styles.mainApp}>
          <Header headerText='hello'/>
          <Footer />
        </View>
    );
  }
}
const styles = {
  mainApp: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20
  }
};


export default App;
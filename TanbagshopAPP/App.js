import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './src/store/store.js';
import Header from './src/components/Header.js';
import Footer from './src/components/Footer.js';
import CounterContainer from './src/containers/CounterContainer.js';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.mainApp}>
          <Header headerText="Tan"/>
          <CounterContainer />
          <Footer />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  mainApp: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
});


export default App;
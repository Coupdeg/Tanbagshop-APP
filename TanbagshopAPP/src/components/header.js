// src/components/header.js
// Import libraries
import React, { Component } from 'react';
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import { Button } from 'react-native-elements';
import propTypes from 'prop-types';
import SearchHeader from 'react-native-search-header';
import Icon from 'react-native-vector-icons/MaterialIcons'
 
// สร้าง Component
class Header extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
      return (
        <View style = { styles.container }>
          <StatusBar barStyle = 'light-content' />
          <View style = { styles.status }/>
          <View style = { styles.header }>
              <Text style = { styles.label }> Tan </Text>
              <Icon
                  name='search'
                  style = {{borderRightWidth: 10}}
                  size={24} 
                  color = 'white' 
                  onPress = {() => this.searchHeader.show()}/>
          </View>
          <SearchHeader
              ref = {(searchHeader) => {
                  this.searchHeader = searchHeader;
              }}
              onGetSearchAutocompletions = {async (text) => {
                  if (text) {
                      const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                          method: `get`
                      });
                      const data = await response.json();
                      return data[1];
                  } else {
                      return [];
                  }
              }}
          />
        </View>
      );
  }
}
Header.propTypes = {
  headerText: propTypes.string.isRequired
};

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5fcff'
  },
  status: {
      zIndex: 10,
      elevation: 2,
      width: DEVICE_WIDTH,
      height: 21,
      backgroundColor: '#0097a7'
  },
  header: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: DEVICE_WIDTH,
      height: 56,
      marginBottom: 6,
      backgroundColor: '#00bcd4'
  },
  label: {
      fontSize: 20,
      fontWeight: '600',
      borderLeftWidth: 165,
      color: '#f5fcff',
      backgroundColor: 'transparent'
  },
});
 

 
// เปิดทางให้ component ตัวอื่นๆ สามารถนำ component ตัวนี้ ไปใช้งานได้
export default Header;
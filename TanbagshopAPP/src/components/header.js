// src/components/header.js
// Import libraries
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Text, View } from 'react-native';
 
// สร้าง Component
class Header extends React.Component {
    render() {
        const { textStyle, viewStyle } = styles;
        return (
        <View style={viewStyle}>
            <Text style={textStyle}>{this.props.headerText}</Text>
        </View>
        );
    }
}
Header.propTypes = {
  headerText: propTypes.string.isRequired
};
 
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
 
// เปิดทางให้ component ตัวอื่นๆ สามารถนำ component ตัวนี้ ไปใช้งานได้
export default Header;
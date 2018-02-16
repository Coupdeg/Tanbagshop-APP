import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};
  } 
  render() {
    return (
      <View style = {styles.cart}>
          <Text>Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cart: {
    paddingTop: 200,
    alignSelf: 'center',
  }
});

export default Cart;
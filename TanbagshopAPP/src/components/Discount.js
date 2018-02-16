import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
 
class Discount extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};
  } 
  render() {
    return (
      <View style = {styles.discount}>
          <Text>Discount</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  discount: {
    paddingTop: 200,
    alignSelf: 'center',
  }
});

export default Discount;
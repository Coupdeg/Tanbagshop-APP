import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};
  } 
  render() {
    return (
      <View style = {styles.account}>
          <Text>Account</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  account: {
    paddingTop: 200,
    alignSelf: 'center',
  }
});

export default Account;
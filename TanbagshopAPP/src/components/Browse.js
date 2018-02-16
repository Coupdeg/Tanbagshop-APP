import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
 
class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};
  } 
  render() {
    return (
      <View style = {styles.browse}>
          <Text>Browse</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  browse: {
    paddingTop: 200,
    alignSelf: 'center',
  }
});

export default Browse;
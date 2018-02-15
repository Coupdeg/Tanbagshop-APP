import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
 
class Body extends Component {
    render() {
      return (
        <View style = {styles.body}>
          <Button
            title="Up"
            onPress={this.props.increment}/>
          <Text
            style={styles.counter}
            onPress={this.props.reset}>
            {this.props.count}
          </Text>
          <Button
            title="Down"
            onPress={this.props.decrement}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  counter: {
    padding: 0,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  body: {
    paddingTop: 200,
  }
});

export default Body;
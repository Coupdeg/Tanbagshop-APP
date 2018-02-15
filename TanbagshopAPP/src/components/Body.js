import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
 
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};
  }
  _renderBody = () => {
    if (this.state.isShowingText) {
      return (
        <View>
        <Button
          title="Up"
          onPress={this.props.increment}
        />
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.state}
        </Text>
        <Button
          title="Down"
          onPress={this.props.decrement}
        />
        </View>
      );
    } else {
        return null;
    }
  }
  toggleShow = () => {
    this.setState({
      isShowingText: !this.state.isShowingText
    });
  }
  render() {
    return (
      <View style = {styles.body}>
        {this._renderBody()}
        <Button
          title="Show"
          onPress={this.toggleShow}
        />
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
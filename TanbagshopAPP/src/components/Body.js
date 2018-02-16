import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};
  }
  _renderBody = () => {
    {/*if (this.state.isShowingText) {
      return (
        <View>
        <Button
          title="Up"
          onPress={this.props.increment}
        />
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.count}
        </Text>
        <Button
          title="Down"
          onPress={this.props.decrement}
        />
        </View>
      );
    } else {
        return null;
    }*/}
    switch (this.props.page){
      case 1:
        return(
          <Text> 
            browse
          </Text>
        );
      case 2:
        return(
          <Text> 
            discount
          </Text>
        );
      case 3:
        return(
          <Text> 
            cart
          </Text>
        );
      case 4:
        return(
          <Text> 
            account
          </Text>
        );
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
  page: {
    padding: 0,
    fontSize: 26,
    fontWeight: 'bold',
  },
  body: {
    paddingTop: 200,
    alignSelf: 'center',
  }
});

const mapStateToProps = (state) => ({
  page: state
})

export default connect(mapStateToProps, null)(Body);
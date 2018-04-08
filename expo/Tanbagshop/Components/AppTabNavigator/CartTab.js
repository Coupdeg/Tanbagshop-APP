import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body, Title } from "native-base";

export default class CartTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor}) => (
      <Icon name="ios-home" style={{ color: tintColor }}/>
    ),
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
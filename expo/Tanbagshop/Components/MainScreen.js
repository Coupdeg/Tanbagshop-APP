import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

import { TabNavigator } from 'react-navigation'

import BrowseTab from './AppTabNavigator/BrowseTab'
import DiscountTab from './AppTabNavigator/DiscountTab'
import CartTab from './AppTabNavigator/CartTab'
import AccountTab from './AppTabNavigator/AccountTab'

export default class componentName extends Component {
  render() {
    return (
      <AppTabNavigator />
    )
  }
}

const AppTabNavigator = TabNavigator({
  BrowseTab: {
    screen: BrowseTab
  },
  DiscountTab: {
    screen: DiscountTab
  },
  CartTab: {
    screen: CartTab
  },
  AccountTab: {
    screen: AccountTab
  }
},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPosition:"bottom",
  tabBarOptions: {
    style:{
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel:false,
    showIcon:true
  }
})
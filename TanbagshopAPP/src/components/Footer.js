import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { Text, View } from 'react-native';
 
class Footer extends React.Component {
    render() {
        return (
            <BottomNavigation
            labelColor="white"
            rippleColor="white"
            style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
            onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
            >
            <Tab
              barBackgroundColor='#00796B'
              label='Browse'
              icon={<FontAwesome size={24} color='white' name='heart-o' />}
            />
            <Tab
              barBackgroundColor='#5D4037'
              label='Discount'
              icon={<FontAwesome size={24} color='white' name='tag' />}
            />
            <Tab
              barBackgroundColor='#37474F'
              label='Cart'
              icon={<EvilIcon size={24} color='white' name='cart' />}
            />
            <Tab
              barBackgroundColor='#3E2723'
              label='Account'
              icon={<Icon size={24} color='white' name='account-circle' />}
            />
          </BottomNavigation>
        );
    }
}
 
const styles = {
  viewStyle: {
    height: 56, 
    elevation: 8, 
    position: 'absolute', 
    left: 0, 
    bottom: 0, 
    right: 0
  },
  textStyle: {
    fontSize: 20
  }
};

export default Footer;
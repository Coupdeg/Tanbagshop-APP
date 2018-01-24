import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import propTypes from 'prop-types';
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
              label='Music'
              icon={<Icon size={24} color='white' name='music-note' />}
            />
            <Tab
              barBackgroundColor='#5D4037'
              label='Books'
              icon={<Icon size={24} color='white' name='book' />}
            />
            <Tab
              barBackgroundColor='#37474F'
              label='Cart'
              icon={<EvilIcon size={24} color='white' name='cart' />}
            />
            <Tab
              barBackgroundColor='#3E2723'
              label='Newsstand'
              icon={<Icon size={24} color='white' name='access-alarm' />}
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
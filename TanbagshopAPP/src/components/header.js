// src/components/header.js
// Import libraries
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import SearchBar from 'react-native-search-bar';
 
// สร้าง Component
class Header extends React.Component {
    showSearchBar(){
      this.searchBar.hide()
    }
    render() {
        return (
        <View style={styles.viewStyle}>
        <SearchBar
          style={styles.searchStyle}
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this.handleResults}
          showOnLoad
        />
        <Button
          raised        
          icon = {<EvilIcon size={24} color='black' name='search' />}
          text = "Search"
        />
        {/*<Text style={styles.textStyle}>{this.props.headerText}</Text>*/}
        </View>
        );
    }
}
Header.propTypes = {
  headerText: propTypes.string.isRequired
};
 
const styles = {
  searchStyle: {
    top: 5,
    width: 325,
    height: 40
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20
    
  }
};
const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];
 

 
// เปิดทางให้ component ตัวอื่นๆ สามารถนำ component ตัวนี้ ไปใช้งานได้
export default Header;
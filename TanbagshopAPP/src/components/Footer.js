import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
 
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  _renderBody = (newTabIndex) => {
    switch (newTabIndex) {
      case 0:
        this.props.browse();
        break;
      case 1:
        this.props.discount();
        break;
      case 2:
        this.props.cart();
        break;
      case 3:
        this.props.account();
        break;

    }
  }
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => this._renderBody(newTabIndex)}>
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

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
  browse: () => { dispatch({ type: 'BROWSE' }) },
  discount: () => { dispatch({ type: 'DISCOUNT' }) },
  cart: () => { dispatch({ type: 'CART' }) },
  account: () => { dispatch({ type: 'ACCOUNT' }) },
})

export default connect(null, mapDispatchToProps)(Footer);
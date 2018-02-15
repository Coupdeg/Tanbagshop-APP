import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../store/store.js';
import Footer from './Footer.js';
import Body from './Body.js';


class Below extends React.Component {
  render() {
    return (
        <View style={styles.mainApp}>
          <Body value = {this.props.count}/>
          <Footer />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  mainApp: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
});

const mapStateToProps = (state) => ({
  count: state
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
  browse: () => { dispatch({ type: 'BROWSE' }) },
  discount: () => { dispatch({ type: 'DISCOUNT' }) },
  cart: () => { dispatch({ type: 'CART' }) },
  account: () => { dispatch({ type: 'ACCOUNT' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Below);
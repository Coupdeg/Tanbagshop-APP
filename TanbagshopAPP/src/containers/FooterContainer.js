import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Footer from '../components/Footer.js';

const mapDispatchToProps = (dispatch) => ({
  browse: () => { dispatch({ type: 'BROWSE' }) },
  discount: () => { dispatch({ type: 'DISCOUNT' }) },
  cart: () => { dispatch({ type: 'CART' }) },
  account: () => { dispatch({ type: 'ACCOUNT' }) },
})

export default connect(mapDispatchToProps)(Footer)
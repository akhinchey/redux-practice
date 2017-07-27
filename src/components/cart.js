import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      const CartItems = this.props.cart.map((item, i) => {
        return <li key={i}>{item}</li>
      })
        return (
            <div className="Cart">
              <Shelf addItem={this.props.action.addToCart} />
              <h2>Cart Items</h2>
              <ul>
                {CartItems}
              </ul>
            </div>

        );
    }
}

function mapStateToProps(state, prop) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
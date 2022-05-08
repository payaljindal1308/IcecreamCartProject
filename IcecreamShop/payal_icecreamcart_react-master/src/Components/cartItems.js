import React from 'react';
import { Component } from 'react';
import '../Styles/Products.css';
import CartItem from './cartItem';
export default class CartItems extends Component {
 
  render(){
    return (
      <div className="Products">
        {this.props.product.map( (product, index) => (
          <CartItem key={index} product={product} onAdd={this.props.onAdd} onRemove={this.props.onRemove}></CartItem>
        ))}
        <footer> <h4>Total: {this.props.total}</h4></footer>
      </div>
  )
  }
}

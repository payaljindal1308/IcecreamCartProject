import React from 'react';
import { Component } from 'react';
import { MyContext } from '../MyContextClass';
import '../Styles/Products.css'
export default class CartItem extends Component {
 
  render(){
    return (
        <div className='itemwrapper'>
        <div>{this.props.product.name}</div>
        <div>Rs.{this.props.product.price}</div>
        <div>
          <button onClick={() => this.props.onAdd(this.props.product)}>+</button>
          <button>{this.props.product.qty}</button>
          <button onClick={() => this.props.onRemove(this.props.product)}>-</button>
        </div>
      </div>

    
      
    )
  }
}

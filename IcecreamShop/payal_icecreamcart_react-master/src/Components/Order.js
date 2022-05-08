import React from 'react';
import { Component } from 'react';
import '../Styles/Orders.css'
import OrderItem from './OrderItem';
export default class Order extends Component {
  render(){
    return (
      <div className="Orders">
      <h2>Order ID: {this.props.id}</h2>
        {Object.values(this.props.order).map( (product, index) => (
          <OrderItem key={index} product={product}></OrderItem>
        ))}
        <footer>Total: {this.props.total}</footer>
      </div>
  )
  }
  
}

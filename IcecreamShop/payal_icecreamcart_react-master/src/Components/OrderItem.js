import React from 'react';
import { Component } from 'react';
import '../Styles/Orders.css'
export default class OrderItem extends Component {
 
  render(){
    return (
      <div className='orderwrapper'>
      <div><img className="logo" src={'https://i.pinimg.com/564x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg'} alt={this.props.product.name} />
        <img className='bestseller' src={"https://previews.123rf.com/images/houbacze/houbacze1806/houbacze180600012/102546546-banner-best-seller.jpg"} alt="bestseller"/></div>
        <div>{this.props.product.name}</div>
        <div>Rs.{this.props.product.price}</div>
        <div>
          <button>{this.props.product.qty}</button>
        </div>
      </div>
    );
  }
  
}

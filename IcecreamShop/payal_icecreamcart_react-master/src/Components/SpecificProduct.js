import React from 'react';
import { Component } from 'react';
import '../Styles/Products.css'
export default class SpecificProduct extends Component {
 render(){
  return (
    <div className='itemwrapper'>
    <div><img className="logo" src={'https://i.pinimg.com/564x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg'} alt="green" />
        <img className='bestseller' src={"https://previews.123rf.com/images/houbacze/houbacze1806/houbacze180600012/102546546-banner-best-seller.jpg"} alt="bestseller"/></div>
      <div>{this.props.name}</div>
      <div>Rs.{this.props.price}</div>
    </div>
  );
 }
}

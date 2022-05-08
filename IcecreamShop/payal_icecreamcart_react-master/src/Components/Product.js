import React from 'react';
import '../Styles/Products.css'
import { Link } from 'react-router-dom';
import { Component } from 'react';

export default class Product extends Component {
 
  render(){
    
    return (
      <div className='itemwrapper'>
        <div><img className="logo" src={'https://i.pinimg.com/564x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg'} alt={this.props.product.name} />
        <img className='bestseller' src={"https://previews.123rf.com/images/houbacze/houbacze1806/houbacze180600012/102546546-banner-best-seller.jpg"} alt={this.props.product.name}/></div>
        <div></div><Link to={"/"+this.props.product.name.split(' ').join('')}><div>{this.props.product.name}</div></Link>
        <div>Rs.{this.props.product.price}</div>
        <div>
          <button onClick={() => {
            this.props.onAdd(this.props.product)
          }
          }>Add</button>
        </div>
      </div>
    );
  }
  
}

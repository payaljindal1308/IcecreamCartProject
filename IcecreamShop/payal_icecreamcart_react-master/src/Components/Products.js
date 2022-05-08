import {React, Component} from "react"
import { MyContext } from "../MyContextClass";
import '../Styles/Products.css'


import Product from './Product.js';

export class Products extends Component {
  
render(){
  return (
    <MyContext.Consumer>
    {
      ({items, onAddToCart}) => {
        
        return <div>
      <div className="Products">
      {Object.keys(items).map(id => (
        <Product key={items[id]._id} product={items[id]} onAdd={onAddToCart}></Product>
      ))}
    </div>
    </div>
    }
  }
    </MyContext.Consumer>
    
);
}
}



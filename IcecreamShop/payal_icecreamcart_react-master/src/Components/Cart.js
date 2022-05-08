import { React } from "react"
import '../Styles/Products.css'
import { Link } from "react-router-dom"
import CartItem from "./cartItem";
import { Component } from "react";
import { MyContext } from "../MyContextClass";
export class Cart extends Component {

 
  
  render() {
      return (
        <MyContext.Consumer>
        {({cartItems,total, onAdd, onRemove, addToOrders}) => {
            if(!Object.keys(cartItems).length){
              return (
                    <h2>Cart is Empty!!</h2>
                  )
            }
            else{
              return(
                <div>
                <div className="Products">
                  {
                    Object.keys(cartItems).map(id => (
                      <CartItem key={cartItems[id]} product={cartItems[id]} onAdd={onAdd} onRemove={onRemove}></CartItem>
                    ))}
                </div>
                  <footer> <h4>Total: {total}</h4></footer>
                  <Link to="/orders"><button className="Order" onClick={addToOrders} >Place Order</button></Link>
              </div>      
              )
            }
          
        }}
          

        </MyContext.Consumer>
        
      );
    }
    // else {
    //   return (
    //     <h2>Cart is Empty!!</h2>
    //   )
    // }
  
}

import {React} from "react"
import { Component } from "react";
import '../Styles/Orders.css'
import Order from './Order.js';


export class Orders extends Component {

 constructor(){
   super()
   this.state = {
     orders: []
   }
 }

  componentDidMount = () => {
    fetch('http://localhost:3001/orders')
     .then(resp => resp.json())
     .then(data => {
       this.setState({orders: data})
     })
     .catch(err => console.log({code: 400, reason:err}))
    }

  
  render(){
  return (
      <div className="Products">
        {this.state.orders.map((order, index) => (
          <Order key={index} id={order._id} order= {order.items} total={order.total}></Order>
        ))}
      </div>
  );
}

}

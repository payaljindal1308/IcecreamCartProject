import fetch from 'cross-fetch';
import React, { Component } from 'react';
import './App.css';

const MyContext = React.createContext({
  items: {},
  cartItems: {},
  total: 0,
  onAddToCart: () => { },
  onAdd: () => { },
  onRemove: () => { },
  addToOrders: () => { },
  getId: () => { }
});

class MyContextClass extends Component {
  constructor() {
    super()
    this.state = {
      items: {},
      cartItems: {},
      total: 0
    }
  }

  addToOrders = () => {
    console.log("Add to orders called")
    fetch('http://localhost:3001/addorders', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: this.state.cartItems,
        total: this.state.total
      })
    }).then(() => {
      console.log("Cart deleted")
      this.setState({
        cartItems: {},
        total: 0
      })
      fetch('http://localhost:3001/deletecart', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
      })
    })
  }


  onAddToCart = (product) => {
    const price = this.state.items[product.id].price;
    const productCart = this.state.cartItems[product.id];
    if (!productCart) {
      this.setState(previousState => ({
        cartItems: { ...previousState.cartItems || {}, [product.id]: { ...product, qty: 1, price: price } },
        total: previousState.total + price
      }), () => {
        fetch('http://localhost:3001/addtocart', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: product.id,
            name: product.name,
            qty: 1,
            price: price,
            total: this.state.total
          })
        })
      })
    }
  }


  onAdd = (product) => {
    const price = this.state.items[product.id].price;
    this.setState(previousState => (
      {
        cartItems: { ...previousState.cartItems, [product.id]: { ...product, qty: product.qty + 1, price: product.price + price } },
        total: previousState.total + price
      }), () => {
        fetch('http://localhost:3001/updatecart', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: product.id,
            price: price
          })
        }
        )
      })
  }

  onRemove = (product) => {
    const price = this.state.items[product.id].price;
    
    if (product.qty === 1) {
      delete this.state.cartItems[product.id];
      this.setState(previousState => ({
        total: previousState.total - price
      }), () => {
        fetch('http://localhost:3001/removefromcart', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: product.id
          })
        }
        )
      })
    } else {
      this.setState(previousState => ({
        cartItems: { ...previousState.cartItems, [product.id]: { ...product, qty: product.qty - 1, price: product.price - price } },
        total: previousState.total - price
      }), () => {
        fetch('http://localhost:3001/decrementfromcart', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: product.id,
            price: price
          })
        }
        )
      })
    }
  }



  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3001/items');
      const json = await response.json();
      const cart = await fetch('http://localhost:3001/cart');
      const cartjson = await cart.json();
      this.setState({
        items: json.reduce((Acc, item) => ({ ...Acc, [item.id]: item }), {}),
        cartItems: cartjson.reduce((Acc, item) => ({ ...Acc, [item.id]: item }), {})
      });
    }
    catch (err) {
      console.log({ code: 400, reason: "Error: " + err });
    }
  }


  render() {
    return (
      <MyContext.Provider value={{
        items: this.state.items,
        cartItems: this.state.cartItems,
        total: this.state.total,
        onAddToCart: this.onAddToCart,
        onAdd: this.onAdd,
        onRemove: this.onRemove,
        addToOrders: this.addToOrders
      }}>
        {this.props.children}


      </MyContext.Provider>

    )
  }
}
export { MyContext }
export default MyContextClass;

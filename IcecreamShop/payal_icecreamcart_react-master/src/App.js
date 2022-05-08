import React, { Component } from "react";
import { NavBar } from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Components/Products";
import { Cart } from "./Components/Cart";
import { Orders } from "./Components/Orders";
import MyContextClass from "./MyContextClass";
import Product from "./Components/Product";
class App extends Component {
    render() {
        return (
            <MyContextClass>
                <div>
                    <NavBar></NavBar>
                    <img src="https://kindkones.com/wp-content/uploads/2019/03/IMG_0111-1200x353.jpg" alt="icecreamimage"></img>
                    <Routes>
                        <Route path="/" element={<Products />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='/orders' element={<Orders />}></Route>
                        
                        {/*items.map(item => (
                            <Route key={item.id} path={"/" + item.name.split(' ').join('')} element={<SpecificProduct id={item.id} name={item.name} price={item.price}></SpecificProduct>}></Route>
                        ))*/}
                    </Routes>
                </div>
            </MyContextClass>
        )
    }
}

export default App;
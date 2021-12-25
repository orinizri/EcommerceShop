import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './pages/Navigation';
import Products from './pages/Products/Pruducts';
import Home from './pages/Home/Home.component';
import Cart from './pages/Cart/Cart.component';
import './index-style.css';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shop : [],
            cart : []
        }
    }
    getItemsInCart = (ItemsInCart) => {
        console.log(ItemsInCart)
        this.setState(prevState => ({
            cart : ItemsInCart
        }), ()=>{
                console.log(this.state.cart)
            })
    }


    render() {
        return (
            <main>
                < Navigation counter={this.state.cart} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/products" element={<Products getCart={this.getItemsInCart} />}/>
                        <Route path="/cart" element={<Cart counter={this.state.cart} />}/>
                    </Routes>
                </div>
            </main>
        )
    }
}
const root = document.querySelector("#root")
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, 
root)
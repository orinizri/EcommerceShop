// import { Link } from "react-router-dom";
import React from 'react'
import './cart-style.css'

export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            sum : 0,
            cart : []
        }
    }
    componentDidMount = () => {
        this.setState(prevState=> ({cart : this.props.counter}))
        for (let item of this.props.counter) {
            this.setState(prev => ({ sum : prev.sum + (item.price*item.numOfItems)}),
            ()=> console.log(this.state.sum))
        }
    }
    onPlusButton = (e) => {
        let changedItemIndex = this.props.counter.findIndex(item => item.id === e.target.parentElement.id)
        const changedItem = this.state.cart[changedItemIndex]; 
        e.target.nextElementSibling.value = +e.target.nextElementSibling.value + 1;
        changedItem['numOfItems'] = e.target.nextElementSibling.value
        const restOfItems = this.props.counter.filter(item => item.id !== e.target.parentElement.id)
        this.setState(prevState => ({
            cart : [...restOfItems, changedItem],
            sum : prevState.sum + (changedItem.price) }),
            ()=> console.log(this.state.cart))
    }
    onMinusButton = (e) => {
        let changedItemIndex = this.props.counter.findIndex(item => item.id === e.target.parentElement.id)
        const changedItem = this.state.cart[changedItemIndex]; 
        if (e.target.previousElementSibling.value > 0) {
        e.target.previousElementSibling.value = +e.target.previousElementSibling.value - 1;
        changedItem['numOfItems'] = e.target.previousElementSibling.value
        const restOfItems = this.props.counter.filter(item => item.id !== e.target.parentElement.id)
        this.setState(prevState => ({
            cart : [...restOfItems, changedItem],
            sum : prevState.sum - (changedItem.price) }),
            ()=> console.log(this.state.cart))
}    }
    gettingItems = () => {
        console.log(this.props.counter)
        return this.props.counter.map((item, index) => {
            console.log(item)
            return (
                <div className='item-in-cart-container' id={item.id}>
                    <img alt={item.name} src={item.avatar}/>
                    <div>Product: {item.name}</div>
                    <div>Number of Items: {item.numOfItems}</div>
                    <div>Price: ${item.price}</div>
                    <div>Color: {item.color}</div>
                    <div>Sub-Total: ${item.price * item.numOfItems}</div>
                    <button onClick={(e)=> this.onPlusButton(e)}>+</button>
                    <input defaultValue={item.numOfItems}/>
                    <button onClick={(e)=> this.onMinusButton(e)}>-</button>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="cart">
                {this.gettingItems()}
                <div className="total-sum"><strong>Total:</strong> ${this.state.sum}</div>
            </div>
        )
    }
}
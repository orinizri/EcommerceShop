// import { Link } from "react-router-dom";
import React from 'react';
import SHOP from '../../api/Api';
import Item from '../../components/Item/Item.component';

export default class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shop : [],
            cart : []
        }
    }
    componentDidMount = async () => {
        const shop = await SHOP.get('/shop')
        this.setState(prevState =>
            ({ shop: shop.data }))
    }
    addItemToCart = (e,id) => {
        console.log(this.state.cart)
        const itemQuantity = (e.target.nextElementSibling.nextElementSibling.value)
        console.log(itemQuantity)
        const addedItem = this.state.shop.filter(item => item.id === id)
        const restOfItems = this.state.cart.filter(item => item.id !== id)
        if (this.state.cart.findIndex((item, index) => item.id === id) !== -1) {
            console.log("double trouble!")
            addedItem[0].numOfItems = parseInt(addedItem[0].numOfItems) + parseInt(itemQuantity)
            console.log(restOfItems)
            return this.setState(prevState => ({
                cart : [...restOfItems, addedItem[0]]
            }), () => console.log(this.state.cart[0]))
        } else {
        console.log("not reaching here")
        console.log(addedItem)
        addedItem[0].numOfItems = e.target.nextElementSibling.nextElementSibling.value;
        return this.setState(prevState => ({
                cart : [...restOfItems,addedItem[0]]
            }), ()=>{
                    console.log(this.state.cart)
                    this.props.getCart(this.state.cart)
                })}
    }
    setItems = () => {
            return this.state.shop.map(item=> {
                return < Item data={item} key={item.id} purchase={this.addItemToCart} minusButton={this.onMinusButton} plusButton={this.onPlusButton}/>
            })
    }
    onPlusButton = (e) => {
        e.target.nextElementSibling.value = +e.target.nextElementSibling.value + 1;
        console.log(e.target.nextElementSibling.value)
    }
    onMinusButton = (e) => {
        if (e.target.previousElementSibling.value>1) {
            e.target.previousElementSibling.value = +e.target.previousElementSibling.value - 1;
            
        }
    }
    render() {
        
        return (
            <div className="items">
                {this.setItems()}
            </div>
        )
    }
}
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
        const itemQuantity = (e.target.nextElementSibling.nextElementSibling.value)
        const addedItem = this.state.shop.filter(item => item.id === id)
        const restOfItems = this.state.cart.filter(item => item.id !== id)
        if (this.state.cart.findIndex((item, index) => item.id === id) !== -1) {
            addedItem[0].numOfItems = parseInt(addedItem[0].numOfItems) + parseInt(itemQuantity)
            return this.setState(prevState => ({
                cart : [...restOfItems, addedItem[0]]
            }), () => console.log(this.state.cart[0]))
        } else {
        addedItem[0].numOfItems = e.target.nextElementSibling.nextElementSibling.value;
        return this.setState(prevState => ({
                cart : [...restOfItems,addedItem[0]]
            }), ()=>{
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
    }
    onMinusButton = (e) => {
        if (e.target.previousElementSibling.value > 1) {
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
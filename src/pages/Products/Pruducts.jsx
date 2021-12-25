// import { Link } from "react-router-dom";
import React from 'react';
import SHOP from '../../api/Api';
import Item from '../../components/Item/Item.component';

export default class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shop : []
        }
    }
    componentDidMount = async () => {
        const shop = await SHOP.get('/shop')
        this.setState(prevState =>
            ({ shop: shop.data }),
            ()=> console.log(this.state.shop))
    }
    onPurchase = (e,id) => {
        console.log(e)
        console.log(id)
    }
    setItems = () => {
            return this.state.shop.map(item=> {
                return < Item data={item} key={item.id} purchase={this.onPurchase}/>
            })
    }
    render() {
        
        return (
            <div className="items">
                {this.setItems()}
            </div>
        )
    }
}
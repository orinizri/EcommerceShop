import React from 'react';
import './item-style.css';

export default class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    
    render() {
        const { id, name, avatar, price, material, color, count } = this.props.data
        return (
            <div className="card-container" key={id}>
                <div className='card-img-container'>
                    <img  alt={name} src={avatar}/>
                    
                </div>
                <div className="card-details">
                    <p>Name: {name}</p>
                    <p>Price: ${price}</p>
                    <p>Material: {material}</p>
                    <p>Color: {color}</p>
                    <p>In-Stock: {count}</p>
                </div>
                <div className="buttons" id={id}>
                    <button onClick={(e) => this.props.purchase(e,id)}>Add to Cart</button>
                    <button onClick={(e)=> this.props.plusButton(e)}>+</button>
                    <input defaultValue='1'/>
                    <button onClick={(e)=> this.props.minusButton(e)}>-</button>
                </div>
            </div>
            
        )
    }
}
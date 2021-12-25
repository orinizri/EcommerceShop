import { Link } from "react-router-dom";
import React from 'react'

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/cart'>Cart</Link>
            </div>
        )
    }
}
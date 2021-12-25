import { Link } from "react-router-dom";
import React from 'react';
import './navigation-style.css';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/cart'>Cart - {this.props.counter.length}</Link>
            </nav>
        )
    }
}
import React, { Component } from 'react';
import ShoppingCart from '../../components/sections/ShoppingCart/ShoppingCart';
import FooterX from '../../components/elements/Navs/Footer';
import HeaderX from '../../components/elements/Navs/Header';
import './CartPage.css';

class CartPage extends Component {
    render() {
        return (
            <div className="Cart-App">
                <HeaderX></HeaderX>
                <ShoppingCart></ShoppingCart>
                <FooterX></FooterX>
            </div>
        );
    }
}

export default CartPage;

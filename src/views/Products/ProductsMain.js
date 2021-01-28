import React from 'react';
import FooterX from '../../components/elements/Navs/Footer';
import HeaderX from '../../components/elements/Navs/Header';
import Products from '../../components/elements/Products/Products';

export default function ProductsMain() {
    return (
        <div className="Main-App">
            <HeaderX></HeaderX>
            <Products></Products>
            <FooterX></FooterX>
        </div>
    )
}

import React from 'react'
import Cart from '../components/Cart';
import Products from '../components/Products'

export default function Home({ totalPrice }) {
    return (
        <div>
            <Cart totalPrice={totalPrice} />
            <Products />
        </div>
    )
}

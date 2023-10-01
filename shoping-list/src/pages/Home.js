import React from 'react'
import Cart from '../components/Cart';
import Products from '../components/Products'

export default function Home({ cartItems, setCartItems, totalPrice }) {
    return (
        <div>
            <Cart cartItems={cartItems} setCartItems={setCartItems} totalPrice={totalPrice} />
            <Products cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    )
}

import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import ProdutCard from './ProdutCard'

export default function Products({ cartItems, setCartItems }) {
    const [products, setProducts] = useState([{ id: 1, name: 'Nike boots', price: 125, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c90322f5-a798-4183-abf7-577dcb1ac860/city-classic-womens-boots-QTgPCN.png' }, { id: 2, name: 'Nike boots', price: 125, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c90322f5-a798-4183-abf7-577dcb1ac860/city-classic-womens-boots-QTgPCN.png' }, { id: 3, name: 'Nike boots', price: 125, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c90322f5-a798-4183-abf7-577dcb1ac860/city-classic-womens-boots-QTgPCN.png' }])

    return (
        <Container>
            <Grid container spacing={3} justifyContent={'center'} my={2}>
                {products.length ? products.map((product, i) => {
                    return <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                        <ProdutCard id={product.id} name={product.name} price={product.price} image={product.image} cartItems={cartItems} setCartItems={setCartItems} />
                    </Grid>
                }) : <p>No products found</p>}
            </Grid>
        </Container>
    )
}

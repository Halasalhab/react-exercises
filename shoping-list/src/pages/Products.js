import { Container, Grid } from '@mui/material'
import React from 'react'
import ProdutCard from '../components/ProdutCard'

export default function Products({products}) {
  return (
    <Container>
        <Grid container spacing={3} justifyContent={'center'} my={2}>
         {products.length? products.map((product, i) =>{
           return <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <ProdutCard name={product.name} price={product.price} image={product.image}/>
           </Grid>
         }): <p>No products found</p>}
        </Grid>
    </Container>
  )
}

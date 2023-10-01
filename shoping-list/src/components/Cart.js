import React, { useState } from 'react'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Box, Container } from '@mui/material';
import Fab from '@mui/material/Fab';
import CartItem from './CartItem';
import Carousel from 'react-material-ui-carousel'

export default function Cart({ cartItems, setCartItems, totalPrice }) {
    const [expanCart, setExpanCart] = useState(false);

    const handelClick = () => {
        setExpanCart(!expanCart);
    }


    const handelDeleteItem = (itemId) => {
        const indexToDelete = cartItems.findIndex((item) => item.id === itemId);

        if (indexToDelete !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(indexToDelete, 1);
            setCartItems(updatedCartItems);
        }
    }

    return (
        <Box sx={{ p: 1 }}>
            <Fab color="primary" aria-label="cart" onClick={handelClick}>
                <ShoppingCartSharpIcon />
            </Fab>
            {expanCart && (<Box sx={{
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
            }}>
                <Container sx={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    width: '25%',
                    hight: '80%'
                }}>
                    {cartItems?.length ? (
                        <>
                            <Carousel autoPlay={false} navButtonsAlwaysInvisible={true}>
                                {
                                    cartItems.map((item, i) => {
                                        return <CartItem key={i} id={item.id} name={item.name} price={item.price} image={item.image} handelDeleteItem={handelDeleteItem} />
                                    })}
                            </Carousel>
                            <p>Total Price: {totalPrice}$</p>
                        </>) : <p>No Items Added To Cart</p>}
                </Container>
            </Box>)}
        </Box>
    )
}

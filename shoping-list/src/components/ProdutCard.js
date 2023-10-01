import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';

export default function ProdutCard({ id, name, price, image, cartItems, setCartItems }) {

    const handelClick = () => {
        const newItem = {
            id: id,
            name: name,
            price: price,
            image: image,
        };
        setCartItems([...cartItems, newItem]);
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        {price}$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={handelClick}>
                    <AddShoppingCartSharpIcon />
                </Button>
            </CardActions>
        </Card>
    )
}

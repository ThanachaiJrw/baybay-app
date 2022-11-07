import React from 'react'
import { CardMedia ,CardContent ,CardActions ,Card , Typography , Button } from '@mui/material'

const CartItem = ({ item }) => {
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} className='cartItemMedia'/>
        <CardContent className='cartItemContent' >
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className='cartItemCardActions'>
            <div className='buttonCardAction'>
                <Button type='Button' size='small'>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type='Button' size='small'>+</Button>
            </div>
            <Button variant="contained" type="button" color="secondary">Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem
import React from 'react'
import { CardMedia ,CardContent ,CardActions ,Card , Typography , Button } from '@mui/material'

const CartItem = ({ item }) => {
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} className='cartItemMedia' sx={{height:260}}/>
        <CardContent className='cartItemContent' sx={{display:'flex',justifyContent:'space-between'}} >
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className='cartItemCardActions' sx={{justifyContent:'space-between'}} >
            <div className='buttonCardAction' sx={{display:'flex',alignItems:'center'}}>
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
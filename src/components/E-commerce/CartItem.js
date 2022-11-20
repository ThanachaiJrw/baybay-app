import React from 'react'
import { CardMedia ,CardContent ,CardActions ,Card , Typography , Button, Box } from '@mui/material'

const CartItem = ({ item , handleUpdateCartQty ,handleRemoveFromCart }) => {
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} className='cartItemMedia' sx={{height:260}}/>
        <CardContent className='cartItemContent' sx={{display:'flex',justifyContent:'space-between',flexDirection: 'column' }} >
            <Typography variant='h4' gutterBottom>{item.name}</Typography>
            <Typography pography variant='h5' >{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>

        <CardActions className='cartItemCardActions' sx={{justifyContent:'space-between'}} >
            <Box className='buttonCardAction' sx={{display:'flex',alignItems:'center'}}>
                <Button type='Button' size='small' onClick={()=>handleUpdateCartQty(item.id,item.quantity-1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type='Button' size='small' onClick={()=>handleUpdateCartQty(item.id,item.quantity+1)}>+</Button>
            </Box>
            <Button variant="contained" type="button" color="error" onClick={()=>handleRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem
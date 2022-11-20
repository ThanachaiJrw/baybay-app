import React from 'react'
import { Container ,Typography ,Button ,Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom';

import CartItem from '../components/E-commerce/CartItem';


const Cart = ({cart , handleUpdateCartQty ,handleRemoveFromCart ,handleEmptyCart}) => {

    const EmptyCart =()=>(
        <div className='container-cart'>
            <Box className='header-cart' borderBottom='#c7c6c5 1px solid'  paddingBottom='10px' >
                <Typography variant='h3' className='title-cart-card'>Your Shopping Cart</Typography>
            </Box>
            <br/>
            <Typography variant='subtitle1'>
                You Have no item in your Shopping Cart.
            </Typography>
            <Box  sx={{display:'flex',justifyContent:'flex-end'}}>
                <Button component={Link} to='/shop' size='large' type='button' variant='contained' color='error' >
                    Let add something!
                </Button>
            </Box>
        </div>
    );

    const FilledCart=()=>(
        <div className='container-cart'>
            <Box className='header-cart' borderBottom='#c7c6c5 1px solid'  paddingBottom='10px' >
                <Typography variant='h3' className='title-cart-card'>Your Shopping Cart</Typography>
            </Box>
            <br/>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <br />
            <div className='cardDetail'>
                    <Typography variant='h4' gutterBottom>Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
                    <Box sx={{display:'flex',justifyContent:'flex-end',gap:'20px'}}>
                        <Button className='emptyButton' size='large' type='button' variant='contained' color='error' onClick={handleEmptyCart}>
                            Empty Cart
                        </Button>
                        <Button component={Link} to='/checkout' className='checkoutButton' size='large' type='button' variant='contained' color='primary' >
                            Check Out
                        </Button>
                    </Box>
            </div>
        </div>
    );
    if (!cart.line_items) return 'Loading';
  return (
    <Container>
        <div className='toolbar'/>
        {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart
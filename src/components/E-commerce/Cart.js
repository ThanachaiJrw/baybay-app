import React from 'react'
import { Container ,Typography ,Button ,Grid } from '@mui/material'


const Cart = ({cart}) => {
    const isEmpty = !cart.line_items.length;

    const EmptyCart =()=>(
        <Typography varaint='subtitle1'>You Have no item in your Shopping Cart. Let add something!</Typography>
    );

    const FilledCart=()=>(
        <>
            <Grid container spacing={3}>
                {cart.lline_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        {/* <CartItem item={item}/> */}
                    </Grid>
                ))}
            </Grid>
        </>
    );
    if (!cart.line_items) return 'Loading';
  return (
    <Container>
        <div className='toolbar'/>
        <Typography varaint='h3' className='title-cart-card'>Your Shopping Cart</Typography>
        {isEmpty ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart
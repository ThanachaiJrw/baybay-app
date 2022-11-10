import React from 'react'
import { Container ,Typography ,Button ,Grid } from '@mui/material'
import { Link } from 'react-router-dom';

import CartItem from '../components/E-commerce/CartItem';


const Cart = ({cart , handleUpdateCartQty ,handleRemoveFromCart ,handleEmptyCart}) => {

    const EmptyCart =()=>(
        <Typography variant='subtitle1'>You Have no item in your Shopping Cart. 
            <Link to='/Shop'>Let add something!</Link>
        </Typography>
    );

    const FilledCart=()=>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                        {item.name}
                    </Grid>
                ))}
            </Grid>
            <div className='cardDetail'>
                    <Typography variant='h4'>Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className='emptyButton' size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>
                            Empty Cart
                        </Button>
                        <Button component={Link} to='/checkout' className='checkoutButton' size='large' type='button' variant='contained' color='primary' >
                            Check Out
                        </Button>
                    </div>
            </div>
        </>
    );
    if (!cart.line_items) return 'Loading';
  return (
    <Container>
        <div className='toolbar'/>
        <Typography variant='h3' className='title-cart-card'>Your Shopping Cart</Typography>
        {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart
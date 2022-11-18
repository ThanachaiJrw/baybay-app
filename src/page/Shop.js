import React from 'react'
import { Grid ,IconButton , Box, Badge} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import ProductCard from '../components/E-commerce/ProductCard'

function Shop({products , onAddToCart ,totalItems}) {
    // console.log(products)
  return (
    <main>
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}
        </Grid>


        <Box sx={{position:'fixed',bottom:'50px',right:'250px',height:'50px',width:'50px',borderRadius:'50%'}}>
            <IconButton LinkComponent={Link} to='/cart'>
                <Badge badgeContent={totalItems} color='error' >
                    <ShoppingCartIcon sx={{height:'50px',width:'50px'}}/>
                </Badge>
            </IconButton>
        </Box>
    </main>
  )
}

export default Shop
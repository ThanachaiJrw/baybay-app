import React from 'react'
import { Grid } from '@mui/material'

import ProductCard from './ProductCard'

function Products({products}) {
    console.log(products)
  return (
    <main>
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products
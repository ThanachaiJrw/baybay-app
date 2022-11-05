import React from 'react'
import { Grid } from '@mui/material'

import ProductCard from './ProductCard'

const products=[
    {id:1,name:'Burning Course',description:'Burn your fat',price:'$500'},
    {id:2,name:'Herculis Cry',description:'improve your muscle more than hurculis',price:'$5000'}
]

function Products() {
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
import React from 'react'
import { CardMedia ,CardContent ,CardActions ,Card , Typography , IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({product}) => {
  return (
    <Card >
        <CardMedia image='' title={''} className='cardMedia'/>
        <CardContent>
          <div className='cardContent'>
            <Typography variant='H5' gutterBottom>
                {product.name}
            </Typography>
            <Typography variant='H5' gutterBottom>
                {product.price}
            </Typography>
          </div>

          <Typography variant='body2' color='textSecondary'>
            {product.description}
          </Typography>

          <CardActions disableSpacing className='cardActions'>
            <IconButton aria-label='Add to Cart'>
              <AddShoppingCartIcon/>
            </IconButton>
          </CardActions>
        </CardContent>

    </Card>
  )
}

export default ProductCard
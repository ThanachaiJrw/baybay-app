import React from 'react'
import { CardMedia ,CardContent ,CardActions ,Card , Typography , IconButton, Box } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({product , onAddToCart , handleSnackbar}) => {

  const allFuction=()=>{
    handleSnackbar();
    onAddToCart(product.id,1);
  }

  return (
    <Card sx={{maxWidth:'100%'}} >
        <CardMedia image={product.image.url} title={product.name} className='cardMedia'  sx={{pt:'56.25%',height:'20px'}}/>
        <CardContent>
          <Box className='cardContent' sx={{display:'flex',justifyContent: 'space-between'}}>
            <Typography variant='H5' gutterBottom>
                {product.name}
            </Typography>

            <Typography variant='H5' gutterBottom>
                {product.price.formatted_with_symbol}
            </Typography>
          </Box>

          <Typography variant='body2' color='textSecondary' dangerouslySetInnerHTML={{__html:product.description}} sx={{height:'50px'}}/>

          <CardActions disableSpacing className='cardActions' sx={{display:'flex',justifyContent:'flex-end'}}>
            <IconButton aria-label='Add to Cart' onClick={()=>allFuction() } >
              <AddShoppingCartIcon/>
            </IconButton>
          </CardActions>
        </CardContent>

    </Card>
  )
}

export default ProductCard
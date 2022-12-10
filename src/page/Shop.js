import React, {useState} from 'react'
import { Grid ,IconButton , Box, Badge ,Snackbar ,Alert  } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

import ProductCard from '../components/E-commerce/ProductCard'

function Shop({products , onAddToCart ,totalItems}) {
    
    const [snackbarOpen, setSnackbarOpen] = useState(false)


    const handleSnackbar =()=>{
        setSnackbarOpen(true);
    };

    const handleCloseSnack=(event, reason)=>{
        if (reason === 'clickaway') {
            return;
          }
      
          setSnackbarOpen(false);
    }

    const SnackbarAction = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnack}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    // console.log(products)
  return (
    <main>
      <div className='toolbar'/>
        <Grid container justifyContent='flex-start' spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <ProductCard product={product} onAddToCart={onAddToCart} handleSnackbar={handleSnackbar}/>
                </Grid>
            ))}
        </Grid>


        <Box sx={{position:'fixed',bottom:'50px',right:{md:'250px',xs:'50%'},height:'50px',width:'50px',borderRadius:'50%'}}>
            <IconButton LinkComponent={Link} to='/cart' >
                <Badge badgeContent={totalItems} color='error' >
                    <ShoppingCartIcon sx={{height:'50px',width:'50px'}}/>
                </Badge>
            </IconButton>
        </Box>

        <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleCloseSnack}
        action={SnackbarAction}>
            <Alert onClose={handleCloseSnack} severity="success">
                Add item on cart!
            </Alert>
        </Snackbar>
    </main>
  )
}

export default Shop
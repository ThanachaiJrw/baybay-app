import React from 'react'
import { Typography ,Box, Grid, Button ,Link } from '@mui/material'

import WomenExercise from '../../assets/img/content/Women exercise.jpg'
import Ecommerce from '../../assets/img/content/Ecommerce.jpg'


const ContentExercises = () => {
  return (
    <div >
       <Grid container display='flex'bgcolor='#fff' >
          <Grid className='content-image-container content' xs='5'>
            <img src={WomenExercise} className='content-image' alt='ExerciseApi'/>
          </Grid>

          <Grid className='content-text-container' xs='12' md='7' sx={{paddingLeft:'50px'}}>
            <Typography variant='h2' className='text-content'>Exercise API</Typography>
            <br/><hr/><br/>
            <Typography variant='h5' className='text-content'>
              This part is consist of Fetch Exercise API for display the information about how to exercise ,exercise machine 
            </Typography>
            <br/><hr/><br/>
            <Typography variant='h5' className='text-content'>
             Video clip from Youtube for tutorial about how to exercise you can click to the information that you’re interested to see how it’s working 
            </Typography>
            <br/>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
              <Link component={Button} href='/exercise' 
              style={{background:'#ff2625',color:'#fff',fontSize:'18px',fontWeight:'bold',textDecoration:'none',width:'150px'}}>
                Try It.
              </Link>
            </Box>
          </Grid>
      </Grid>
      <Grid container display='flex' mt='20px' bgcolor='#fff' >
          <Grid className='content-text-container' xs='12' md='7' sx={{paddingRight:'80px'}}>
            <Typography variant='h2' className='text-content'>Commerce API</Typography>
            <br/><hr/><br/>
            <Typography variant='h5' className='text-content'>This part is about shop and payment method by using commerceJS thats about back end part.</Typography>
            <br/><hr/><br/>
            <Typography variant='h5' className='text-content'>Shop is consist of products and address for shipping and manage payment with Stripe. </Typography>
            <br/>
            <Box sx={{display:'flex',justifyContent:'flex-start'}}>
              <Link component={Button} href='/shop' 
              style={{background:'#ff2625',color:'#fff',fontSize:'18px',fontWeight:'bold',textDecoration:'none'}}>
                Shop Here.
              </Link>
            </Box>
          </Grid>

          <Grid className='content-image-container content' xs='5' justifySelf='flex-end'>
            <img src={Ecommerce} className='content-image' alt='CommerceApi'/>
          </Grid>
      </Grid>
    </div>

  )
}

export default ContentExercises
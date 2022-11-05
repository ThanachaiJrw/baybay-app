import { Stack, Typography ,Box, Grid, Button } from '@mui/material'
import React from 'react'

const Content = () => {
  return (
    // direction={{md:'column',sm:'row'}}
    <Grid container columnSpacing={3} bgcolor='#fff'sx={{py:'10px',px:'0'}} overflow='hidden' justify="center" id='contact'>
      <Grid container item className='main-content' xs={11} lg='8' 
      display='flex' direction='column' padding='0'
      >
        <Typography className='home-content main-content-box header-content' fontSize='26px' mb='5px' fontWeight='bold' >
          Welcome to ours website.
        </Typography>
        
        <Stack mb='5px' >
          <Typography className='home-content main-content-box'>
            เว็บไซต์นี้จะนำเสนอการออกกำลังกายในรูปแบบต่างๆให้สืบค้น<br/>
            มีการขายของและคำนวณสิ่งต่างๆโดยง่าย<br/>
            เว็บนี้เป็นส่วนหนึ่งของResume ไม่ได้มีเจตนาเชิงพาณิชณ์<br/>
            Thank you.Thanachai Weawsri. (Junior)
          </Typography >
        </Stack >

        <Box className='home-content main-content-box' mb='5px'>
          Example exercises.
          fetch Api exercises.
        </Box>
        
        <Box className='home-content main-content-box' mb='5px'>
          Example Shop
          Example Card Course
        </Box>
      </Grid>

      <Grid container item className='side-bar-content' xs='11' lg='3' 
      display='flex' direction='column' justifyContent='flex-start' 
      >
          <Typography className='home-content sub-content contact-content' 
          sx={{border:'none',color:'#80400B',bgcolor:'#fedac1',borderRadius:'10px',fontSize:'26px',fontWeight:'bold'}} >
            Contact Me
          </Typography>
          <Box className='home-content sub-content' mb='5px' mt='5px'>
            Contact Me
            logo 2-3 logo
          </Box>
          <Box className='home-content sub-content' mb='5px'>
            BMI
          </Box>
      </Grid>
    </Grid>
  )
}

export default Content
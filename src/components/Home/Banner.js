import React from 'react'
import { Box , Button, Typography , Link } from '@mui/material'

import video from '../../assets/video2.mp4'
import imgBanner from '../../assets/img/banner.png'

const Banner = () => {
  return (
      <Box sx={{
      pt:{lg:'212px', xs:'70px'},
      pl:{sm: '50px'}
  }} position="relative" p="20px" m='0px' bgcolor='#fff'>

      <Box className="banner-animation">
        <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
        <h2>BAY-BAY</h2>
      </Box>

      <Typography variant='h3' color='#ff2625' fontWeight='bold' sx={{mt:'30px',mb:'20px'}}>
        Fitness club.
      </Typography>

      <Typography variant='h5' color="#E3B778" fontWeight='bold' mb='20px'>
        We design what's your desire.
      </Typography>

      <Link component={Button} href='/exercise'  
      style={{background:'#ff2625',color:'#fff',fontSize:'18px',fontWeight:'bold',textDecoration:'none'}}>
        Get Start.
      </Link>

      <Typography
         fontWeight={600}
         color="#FCAE1E"
         sx={{
            opacity:0.1,
            display:{lg:'block',xs:'none'}
         }}
         fontSize="200px"
        >
            BAY-BAY
        </Typography>

      {/* หารูปใหม่ */}
      <img src={imgBanner} alt='banner' className='home-banner-img'/>
    </Box>
  )
}

export default Banner
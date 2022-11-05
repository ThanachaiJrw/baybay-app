import React from 'react'
import { Stack , Toolbar , Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack position='fixed' color='inherit' className='Appbar' >
      <Toolbar justifycontent='space-around' className='Navbar'>
        <Typography className='logo-h' to='/' variant='h4' component={Link} color="#000"
        fontWeight="bold" alignitem='center' style={{textDecoration:'none',fontFamily:'Silkscreen'}} >
          Bay-Bay
        </Typography>
        <Stack alignitem='center' direction='row' gap='30px' height="30px" >
          <Link to='/' className='Nav-link'>Home</Link>
          <Link to='/exercise' className='Nav-link'>Exercises</Link>
          <Link to='/shop' className='Nav-link'>Shop</Link>
          <a to='/' href='#contact' className='slid-animation'>
            <span>
              Get in touch
            </span>
          </a>
        </Stack>
      </Toolbar>
    </Stack>
  )
}

export default Navbar
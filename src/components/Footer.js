import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

// import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <Stack bgcolor='#FDEFB2' px='30px' pt='10px' justifyContent='space-between' direction='row'>
      <Box>
        <Typography fontSize='24px' fontWeight='bold'>
          Bay-Bay Exercise.
        </Typography>
        <Typography fontSize='18px'>
          Made By Thanachai.jr. With React and Material UI.
        </Typography>
      </Box>
      <Box>
        Contact Me.
      </Box>
    </Stack>
  )
}

export default Footer
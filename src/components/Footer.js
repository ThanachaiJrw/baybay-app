import { Box, Stack, Typography ,IconButton} from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'

import { FaLine ,FaWhatsapp ,FaGithub ,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <Stack bgcolor='#FDEFB2' px='30px' pt='10px' justifyContent='center' direction='column' py='20px'>
      <Box justifyContent='center' display='flex'>
        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/thanachaijr' className='footer-icon-link ' >
          <FaLinkedin className='footer-icon linkin'/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/ThanachaiJrw' className='footer-icon-link'>
          <FaGithub className='footer-icon github'/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://wa.me/66868914679' className='footer-icon-link'>
          <FaWhatsapp className='footer-icon whatsapp'/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://line.me/ti/p/vn8ru3THvB' className='footer-icon-link'>
          <FaLine className='footer-icon line'/>
        </a>
      </Box>
      <Box justifyContent='center' display='flex' mt='12px'>
        <Typography fontSize='15px'>
          Made By Thanachai.jr. With React and Material UI.
        </Typography>
      </Box>

    </Stack>
  )
}

export default Footer
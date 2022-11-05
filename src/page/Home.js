import { Box } from '@mui/system'
import React from 'react'

import Banner from '../components/Home/Banner'
import Content from '../components/Home/Content'


import ContactUs from '../components/Home/ContactUs'
// import ContactUs2 from '../components/Home/ContactUs2';

const Home = () => {
  return (
    <Box m='0' p='0' overflow='hidden'>
      <Banner />
      <Content/>
      <ContactUs/>
    </Box>
  )
}

export default Home
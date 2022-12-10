import { Box } from '@mui/system'
import React from 'react'

import Banner from '../components/Home/Banner'
import ContentExercises from '../components/Home/ContentExercises'


import ContactUs from '../components/Home/ContactUs'

const Home = () => {
  return (
    <Box m='0' p='0' overflow='hidden'>
      <Banner />
      <ContentExercises/>
      <ContactUs/>
    </Box>
  )
}

export default Home
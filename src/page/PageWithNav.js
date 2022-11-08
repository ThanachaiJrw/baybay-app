import { Route , Routes } from 'react-router-dom' ;

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from './Home';
import Exercises from './Exercises'
import Shop from './Shop'
import ExerciseDetail from './ExerciseDetail'
// import ContactUs from '../components/Home/ContactUs'

import React from 'react'

const PageWithNav = () => {
  return (
    <React.Fragment>
    {/* <Navbar/> */}
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/exercise' element={<Exercises/>}/>
        <Route path='/Shop/*' element={<Shop/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
        {/* <Route path='/contextus' element={<ContactUs/>}/> */}
    </Routes>
    {/* <Footer/> */}
    </React.Fragment>
  )
}

export default PageWithNav
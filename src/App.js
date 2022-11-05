import './App.css';
import { Box } from '@mui/material';
import { Route , Routes } from 'react-router-dom' ;

import Checkout from './page/Checkout'
import PageWithNav from './page/PageWithNav'


function App() {
  return (
    <Box width='400px' m='auto' sx={{width:{xl:'1488px'}}}>
      <Routes>
        <Route path='*' element={<PageWithNav/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </Box>
  );
}

export default App;

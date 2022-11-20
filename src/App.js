import './App.css';
import { Box } from '@mui/material';
import { Route , Routes ,useLocation  } from 'react-router-dom' ;

import Home from './page/Home';
import Exercises from './page/Exercises'
import Shop from './page/Shop'
import Cart from './page/Cart';
import ExerciseDetail from './page/ExerciseDetail'
import Checkout from './page/Checkout'

import React, { useState ,useEffect } from 'react'
import { commerce } from './utils/commerce'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  //page
  const location = useLocation ()

  //E-commerce
  const [products,setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [order,setOrder] = useState({});
  const [errorMassage, setErrorMassage] = useState('');

  const fetchProducts =async()=>{

    const {data} = await commerce.products.list();

    setProducts(data)
  }

  const fetchCart = async() =>{
    setCart(await commerce.cart.retrieve())
  }
  
  const handleAddToCart =async(productId,quantity)=>{
    const item =await commerce.cart.add(productId,quantity);

    setCart(item.cart)
  }

  const handleUpdateCartQty=async(productId,quantity)=>{
    const {cart} =await commerce.cart.update(productId,{quantity});

    setCart(cart)
  }

  const handleRemoveFromCart =async(productId)=>{
    const item =await commerce.cart.remove(productId)

    setCart(item.cart)
  }

  const handleEmptyCart =async()=>{
    const item =await commerce.cart.empty()
    setCart(item.cart)
  }

  const refreshCart=async()=>{
    const newCart = await commerce.cart.refresh();
    setCart(newCart)
  }

  const handleCaptureCheckout =async(checkoutTokenId,newOrder)=>{
    try {
      const inComingOrder = await commerce.checkout.capture(checkoutTokenId,newOrder)

      setOrder(inComingOrder)
      refreshCart();
    } catch (error) {
      setErrorMassage(error.data.error.message)
    }
  }

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[]);

  // console.log('Cart =',cart)

  return (
    <Box width='400px' m='auto' sx={{width:{xl:'1488px'}}}>
      {location.pathname!=='/checkout'?<Navbar/>:null}
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/exercise' element={<Exercises/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>

        <Route path='/shop' element={<Shop products={products} onAddToCart={handleAddToCart} totalItems={cart.total_items} />}/>
        <Route path='/cart' element={<Cart cart={cart}
                                            handleUpdateCartQty={handleUpdateCartQty}
                                            handleRemoveFromCart={handleRemoveFromCart}
                                            handleEmptyCart={handleEmptyCart}/>}/>
        <Route path='/checkout' element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMassage}/>} /> 
      </Routes>
      {location.pathname==='/checkout'||location.pathname==='/shop'||location.pathname==='/cart'? null:<Footer/>}
    </Box>
  );
}

export default App;

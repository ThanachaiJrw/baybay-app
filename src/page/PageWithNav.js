// import { Route , Routes } from 'react-router-dom' ;

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// import Home from './Home';
// import Exercises from './Exercises'
// import Shop from './Shop'
// import Cart from './Cart';
// import ExerciseDetail from './ExerciseDetail'
// // import ContactUs from '../components/Home/ContactUs'

// import React, { useState ,useEffect } from 'react'
// import { commerce } from '../utils/commerce'

// const PageWithNav = () => {
//   //E-commerce
//   const [products,setProducts] = useState([])
//   const [cart, setCart] = useState([])

//   const fetchProducts =async()=>{

//     const {data} = await commerce.products.list();

//     setProducts(data)
//   }

//   const fetchCart = async() =>{
//     setCart(await commerce.cart.retrieve())
//   }
  
//   const handleAddToCart =async(productId,quanitity)=>{
//     const item =await commerce.cart.add(productId,quanitity);

//     setCart(item.cart)
//   }

//   useEffect(()=>{
//     fetchProducts();
//     fetchCart();
//   },[]);

//   console.log('Cart =',cart)


//   return (
//     <React.Fragment>
//     {/* <Navbar/> */}
//     <Routes>
//         <Route exact path='/' element={<Home/>}/>
//         <Route path='/exercise' element={<Exercises/>}/>
//         <Route path='/Shop' element={<Shop products={products} onAddToCart={handleAddToCart} totalItems={cart.total_items} />}/>
//         <Route path='/Cart' element={<Cart />}/>
//         <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
//         {/* <Route path='/contextus' element={<ContactUs/>}/> */}
//     </Routes>
//     {/* <Footer/> */}
//     </React.Fragment>
//   )
// }

// export default PageWithNav
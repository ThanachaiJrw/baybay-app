import React, { useState ,useEffect } from 'react'
import Cart from '../components/E-commerce/Cart'
import Products from '../components/E-commerce/Products'

import { commerce } from '../utils/commerce'

const Shop = () => {
  const [products,setProducts] = useState([])
  const [cart, setCart] = useState([])

  const fetchProducts =async()=>{

    const {data} = await commerce.products.list();

    setProducts(data)
  }

  const fetchCart = async() =>{
    setCart(await commerce.cart.retrieve())
  }
  
  const handleAddToCart =async(productId,quanitity)=>{
    const item =await commerce.cart.add(productId,quanitity);

    setCart(item.cart)
  }

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[]);

  console.log('Cart =',cart)

  return (
    <div>
      {/* <Products products={products} onAddToCart={handleAddToCart} totalItems={cart.total_items}/> */}
      <Cart cart={cart}/>
    </div>
  )
}

export default Shop
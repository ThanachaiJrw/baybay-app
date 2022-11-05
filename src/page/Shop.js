import React, { useState ,useEffect } from 'react'
import Products from '../components/E-commerce/Products'

import { commerce } from '../utils/commerce'

const Shop = () => {
  const [products,setProducts] = useState([])

  const fetchProducts =async()=>{

    const {data} =await commerce.products.list();

    setProducts({data})
  }

  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div>
      <Products />
    </div>
  )
}

export default Shop
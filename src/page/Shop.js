import React, { useState ,useEffect } from 'react'
import Products from '../components/E-commerce/Products'

import { commerce } from '../utils/commerce'

const Shop = () => {
  const [products,setProducts] = useState([])

  const fetchProducts =async()=>{

    const {data} = await commerce.products.list();
    // console.log({data})

    // const respond = await commerce.products.list();
    // console.log(respond)

    setProducts(data)
    // setProducts(respond)
  }

  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div>
      <Products products={products}/>
    </div>
  )
}

export default Shop
import React, { useEffect, useState } from 'react';
import useGetProducts from '../hooks/useGetProducts';


const ProductList = () => {
    const products = useGetProducts();
  return (
    <div>
        {products.map((ele) => {
        return    <h1 key={ele.id} style={{textAlign:"center"}}>{ele.title}</h1>
        })}
    </div>
  )
}

export default ProductList
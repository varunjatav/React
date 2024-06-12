import React, { useEffect, useState } from 'react'

const useGetProducts = () => {

    const [products, setProducts]  = useState([]);
    useEffect(() => {
        getProducts();
    },[])

    const getProducts = async() => {
        const res = await fetch('https://fakestoreapi.com/products');
        const products = await res.json();
        setProducts(products);
    }
  return products
}

export default useGetProducts
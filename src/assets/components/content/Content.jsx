import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])
  
    console.log(products)
    return(
        <>
        <Outlet context={[products]}/>
        </>
    )
}
export default Content
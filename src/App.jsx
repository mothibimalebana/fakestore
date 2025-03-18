import { useState } from "react"
import Navbar from "./assets/components/navbar/NavBar"
import NavButton from "./assets/components/navbar/Navbuttons"
import { useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  console.log(products)

  return(
    <>
      <div className="container">
        <Navbar/>
      </div>
    </>
  )
}

export default App
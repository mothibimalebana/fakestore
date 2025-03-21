import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Content = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await fetch('https://fakestoreapi.com/products');
                const res = await data.json();
                setProducts(res);
            }
            catch(error){
                console.error(error.message)
            }
        }
        fetchData();
    }, [])
    return(
        <>
        <Outlet context={[products]}/>
        </>
    )
}
export default Content
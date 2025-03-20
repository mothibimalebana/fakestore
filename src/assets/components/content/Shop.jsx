import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Card = (product) => {
    return(
        <>
            <div className="product">
                {
                    <>
                        <Link to={product.title}>
                            <img src={product.image} alt={product.title} />
                            <h5>{product.title}</h5>
                            <h6>R{product.price}</h6>
                        </Link>
                    </>
                }
            </div>
        </>
    )
}
const Shop = () => {
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


    return (
        <>
            <div>
                {products.map((product) => {
                    return <Card key={product.id} products={product}/>
                })}
            </div>
        </>
    )
}

export default Shop
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Card = (products) => {
    return(
        <>
            <div className="products">
                {
                    products.map((product) => {
                        return(
                            <>
                                <Link key={product.id} to={product}>
                                    <div className="card">
                                        <img src={product.image} alt={product.description} />
                                        <h5>{product.title}</h5>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
const Shop = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await fetch('https://fakestoreapi.com/products');
                const res = await data.json();
                setProducts(await res);
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
                {
                    products.map((product) => {
                        console.log(product)
                    })
                }
            </div>
        </>
    )
}

export default Shop
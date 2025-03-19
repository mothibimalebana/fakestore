import { Link, useOutletContext } from "react-router-dom"

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
    const [productData] = useOutletContext();
    console.log(productData)
    return (
        <>
            <div>
                {
                    productData.map((product) => {
                        return(
                            <Card products={product}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Shop
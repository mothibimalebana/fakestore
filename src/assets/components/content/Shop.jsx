import { useOutletContext } from "react-router-dom"

const Card = (products) => {
    return(
        <>
            <div className="card">
                {
                    products.map((product) => {
                        return(
                            <>
                                <a href={product}>
                                    <img src={product.image} alt={product.description} />
                                    <h5>{product.title}</h5>
                                </a>
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
import { useContext, useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import styles from '../../css/shop.module.css';


export const Card = (product) => {
    return(
        <>
            <div className={styles.product}>
                {
                    <>
                        <Link to={`${product.products.id}`}>
                            <img className={styles.img} src={product.products.image} alt={product.products.title} />
                            <h5>{product.products.title}</h5>
                            <h3>${product.products.price}</h3>
                        </Link>
                    </>
                }
            </div>
        </>
    )
}
const Shop = () => {
    const [products] = useOutletContext();
    return (
        <>
            <div className={styles.productList}>
                {products.map((product) => {
                    // console.log(product);
                    return <Card key={product.id} products={product}/>

                })}
            </div>
        </>
    )
}

export default Shop
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from '../../css/shop.module.css';


const Card = (product) => {
    console.log(product.products.id);   
    return(
        <>
            <div className={styles.product}>
                {
                    <>
                        <Link to={`${product.products.id}`}>
                            <img className={styles.img} src={product.products.image} alt={product.products.title} />
                            <h5>{product.products.title}</h5>
                            <h6>R{product.products.price}</h6>
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
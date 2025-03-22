import { useOutletContext, useParams } from "react-router-dom"
import styles from '../../css/product.module.css';


const Product = () => {
    const { id } = useParams();
    const [ products ] = useOutletContext();
    const product = products[id-1];
    if(!products[id-1]){
        return <p>{`Page does not exist`}</p>
    }


    return(
        <>
            {
                product && (
                <div className={styles.product}>
                    <div className="left">
                        <img className={styles.img} src={product.image} alt={product.title} />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}><h2>{product.title}</h2></div>
                        <div className={styles.price}>{product.price}</div>
                        <div className="description purchase">{product.description}</div>
                        <div className={styles.quantity}>
                            <div className="decr"><button className={styles.qButtons}>-</button></div>
                            <input className={styles.qInput} type="number" name="quantity" id="" />
                            <div className="incr"><button className={styles.qButtons}>+</button></div>
                        </div>
                        <div className="addToCart"></div>
                    </div>
                </div> 
                )
            }  
        </>
    )
}

export default Product
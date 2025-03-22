import { useOutletContext, useParams } from "react-router-dom"
import styles from '../../css/product.module.css';
import { useId, useState } from "react";


const Product = () => {
    const [quntity, setQuantity] = useState(0)
    const { id } = useParams();
    const [ products ] = useOutletContext();
    const product = products[id-1];
    const quantityInput = useId();

    const handleSubmit = () => {

    }

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
                        <div className={styles.buttons}>
                            <div className={styles.quantity}>
                                <div className="decr"><button onClick={handleSubmit} className={styles.qButtons}>-</button></div>
                                <label htmlFor={quantityInput}></label>
                                <input className={styles.qInput} value={quntity} onChange={handleSubmit} name="quantity" id={quantityInput} />
                                <div className="incr"><button className={styles.qButtons}>+</button></div>
                            </div>
                            <div className="addToCart">
                                <button onClick={handleSubmit} className={styles.cButton}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div> 
                )
            }  
        </>
    )
}

export default Product
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
                <div className="product">
                    <div className="left">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="right">
                        <div className="title">{product.title}</div>
                        <div className="price">{product.price}</div>
                        <div className="description purchase">{product.description}</div>
                    </div>
                </div> 
                )
            }  
        </>
    )
}

export default Product
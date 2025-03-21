import { useOutletContext } from "react-router-dom"

const Product = () => {
    const [products] = useOutletContext();

    return(
        <>
            <div className="product">
                <div className="left">
                    <img src="" alt="" />
                </div>
                <div className="right">
                    <div className="title"></div>
                    <div className="price"></div>
                    <div className="description purchase"></div>
                </div>
            </div>
        </>
    )
}
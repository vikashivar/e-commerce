import "./Product.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp'
const Product = ({id,data}) => {
    console.log('id',id)
    console.log('data',data)
    return <div className="product-card">
        <div className="thumbnail">

            <img src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                data?.img?.data[0]?.attributes?.url

            } alt="" />
        </div>

            <div className="prod-details">
                <span className="name">{data?.title}</span>
                <span className="price">&#8377;{data?.price}</span>
            </div>
    </div>;
};

export default Product;

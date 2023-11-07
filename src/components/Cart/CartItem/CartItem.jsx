import "./CartItem.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp'
import {MdClose} from 'react-icons/md'
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                 <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">product name</span>
                <MdClose className="close-btn"></MdClose>
                <div className="quantity-buttons">
                        <span >-</span>
                        <span>4</span>
                        <span >+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span>&#8377;2454</span>
                    </div>
            </div>
        </div>
    </div>;
};

export default CartItem;

import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const { cartItems, handleAddToCart, handleRemoveFromCart } =
    useContext(Context);
  console.log("j", cartItems);
  return (
    <div className="cart-products">
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="cart-product">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">{item?.attributes?.title}</span>
              <MdClose className="close-btn"></MdClose>
              <div className="quantity-buttons">
                <span>-</span>
                <span>4</span>
                <span>+</span>
              </div>
              <div className="text">
                <span>3</span>
                <span>x</span>
                <span>&#8377;{item?.attributes?.title}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;

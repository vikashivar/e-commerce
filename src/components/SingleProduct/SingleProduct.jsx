import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from '../../assets/products/earbuds-prod-1.webp'

const SingleProduct = () => {
    return <div className="single-product-main-content">
    <div className="layout">
        <div className="single-product-page">
            <div className="left">
                <img
                    src={
                    prod
                    }
                />
            </div>
            <div className="right">
                <span className="name">Product name</span>
                <span className="price">Price</span>
                <span className="desc">Product description</span>
    
                <div className="cart-buttons">
                    <div className="quantity-buttons">
                        <span >-</span>
                        <span>4</span>
                        <span >+</span>
                    </div>
                    <button
                        className="add-to-cart-button"
                       
                    >
                        <FaCartPlus size={20} />
                        ADD TO CART
                    </button>
                </div>
    
                <span className="divider" />
                <div className="info-item">
                    <span className="text-bold">
                        Category:{" "}
                        <span>
                        Headphones
                        </span>
                    </span>
                    <span className="text-bold">
                        Share:
                        <span className="social-icons" style={{display:'inline-block'}}>
                            <FaFacebookF size={16} />
                            <FaTwitter size={16} />
                            <FaInstagram size={16} />
                            <FaLinkedinIn size={16} />
                            <FaPinterest size={16} />
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <RelatedProducts
        ></RelatedProducts>
    </div>
    </div>
};

export default SingleProduct;






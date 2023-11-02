import Product from "./Product/Product";
import "./Products.scss";

const Products = () => {
    return <div className="products-container">
        <div className="sec-heading"> Section Heading
            <div className="products">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                
            </div>
        </div>
    </div>;
};

export default Products;

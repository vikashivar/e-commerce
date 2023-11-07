import { useContext, useEffect, useState } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";


const Home = () => {
    const {categories,setCategories,products,setProducts}=useContext(Context)

    
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
            
            
        });
    };




    return <div >
        <Banner></Banner>
        <div className="main-content">
            <div className="layout">
                <Category categories={categories}></Category>
                <Products products={products} headingText='Popular Products'></Products>
                
            </div>
        </div>
    </div>;
};

export default Home;

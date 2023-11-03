import "./Header.scss";
import  {useEffect,useState,useContect} from 'react'
import {useNavigate} from 'react-router-dom'
import { TbSearch} from 'react-icons/tb'
import {CgShoppingCart} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'
import Cart from '../Cart/Cart'
import { Context } from "../../utils/context";
import Search from './Search/Search'



const Header = () => {
    const [scrolled, setScrolled]=useState(false)
    const [showCart,setShowCart]=useState(false)
      useEffect(()=>{
           window.addEventListener('scroll',()=>{
            const offset =window.scrollY
            if(offset >200){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
           })
      },[])

    return <> 
    <header className={` main-header  ${scrolled ? 'sticky-header':''}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">E-SHOP</div>
            <div className="right">
                <TbSearch></TbSearch>
                <AiOutlineHeart></AiOutlineHeart>
            <span className="cart-icon"
                   onClick={()=>{
                    setShowCart(true)
                   }}
            >
                 <CgShoppingCart></CgShoppingCart>
                 <span>15</span>
            </span>
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}></Cart>}
    </>;
};

export default Header;

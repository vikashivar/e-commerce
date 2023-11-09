import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import Search from "./Search/Search";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <header className={` main-header  ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div
            className="center"
            onClick={() => {
              navigate("/");
            }}
          >
            E-SHOP
          </div>
          <div className="right">
            <TbSearch
              style={{ zIndex: 100 }}
              onClick={() => {
                setShowSearch(true);
                console.log("hi");
              }}
            ></TbSearch>
            <AiOutlineHeart></AiOutlineHeart>
            <span
              className="cart-icon"
              onClick={() => {
                setShowCart(true);
              }}
            >
              <CgShoppingCart></CgShoppingCart>
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart}></Cart>}
      {showSearch && <Search setShowSearch={setShowSearch}></Search>}
    </>
  );
};

export default Header;

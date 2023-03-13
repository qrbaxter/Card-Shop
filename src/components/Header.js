import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName = cartItems.length > 0 ? "cartColorFull" : "cartColorEmpty";

  return (
    <header className="headerpiece">
      <Link to="/" className="cardslink">
        Cards
      </Link>
      <Link to="/cart" className="cartlink">
        Cart
        <FontAwesomeIcon icon={faHeart} />
      </Link>
    </header>
  );
}

export default Header;

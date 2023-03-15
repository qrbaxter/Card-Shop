import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard as solidCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard as emptyCreditCard } from "@fortawesome/free-regular-svg-icons";


function Header() {
    const { cartItems } = useContext(Context);
    const icon = cartItems.length > 0 ? solidCreditCard : emptyCreditCard
  
    return (
      <header className="headerpiece">
        <Link to="/" className="cardslink">
          Cards
        </Link>
        <Link to="/cart" className="cartlink">
        Checkout <FontAwesomeIcon icon={icon} />
        </Link>
      </header>
    );
  }
export default Header;
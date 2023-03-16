import React, {useState, useContext} from "react"

import {Context} from "../Context"
import useHover from "../hooks/useHover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard as faSolidCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard as faRegularCreditCard } from "@fortawesome/free-regular-svg-icons";


function Card({ className, card }) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon() {
        if (card.isFavorite) {
          return <FontAwesomeIcon icon={faSolidHeart} onClick={() => toggleFavorite(card.code)} />;
        } else if (hovered) {
          return <FontAwesomeIcon icon={faRegularHeart} onClick={() => toggleFavorite(card.code)} />;
        }
      }
      

      function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.code === card.code);
        if (alreadyInCart) {
          return <FontAwesomeIcon icon={faSolidCreditCard} onClick={() => removeFromCart(card.code)} />;
        } else if (hovered) {
          return <FontAwesomeIcon icon={faRegularCreditCard} onClick={() => addToCart(card)} />;
        }
      }
      



      return (
        <div className={`${className} cardHoverino`} ref={ref}>
          <img src={card.image} alt={card.code} code={card.code} className="card-image image-grid" />
          
          <div className = "icon-container">{heartIcon()}
          {cartIcon()}</div>
         
        </div>
      );
      
    }



export default Card;
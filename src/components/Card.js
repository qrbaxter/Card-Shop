import React, {useState, useContext} from "react"

import {Context} from "../Context"
import useHover from "../hooks/useHover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ className, card }) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon(){
        if (card.isFavorite) {
            return <FontAwesomeIcon icon="fa-solid fa-heart" onClick = {()=>toggleFavorite(card.code)} />
        } else if (hovered) {
            return <FontAwesomeIcon icon="fa-regular fa-heart" onClick = {()=>toggleFavorite(card.code)} />
           
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.code === card.code)
        if(alreadyInCart) {
            return <FontAwesomeIcon icon="fa-solid fa-credit-card" onClick={() => removeFromCart(card.code)}/>
        } else if(hovered) {
            return <FontAwesomeIcon icon="fa-regular fa-credit-card" onClick={()=>addToCart(card)} />
        }
    }





  return (

  <div 
    className = {`${className} cardHoverino`}
    ref={ref}
>

    <img src={card.image} alt={card.code} code = {card.code} className="image-grid" />
    {heartIcon()}
    {cartIcon()}

  </div>
  );
}



export default Card;
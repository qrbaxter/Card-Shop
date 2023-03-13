import React, {useState, useContext} from "react"

import {Context} from "../Context"
import useHover from "../hooks/useHover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons"

function Card({ className, card }) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon(){
        if (card.isFavorite) {
            return <h1 className = "redHeart" onClick = {toggleFavorite(card.id)}>Heart</h1>
        } else if (hovered) {
            return <h1 className = "grayHeart" onClick = {()=>toggleFavorite(card.id)}>Heart</h1>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === card.id)
        if(alreadyInCart) {
            return <h1 className="redCart" onClick={() => removeFromCart(card.id)}>Carto</h1>
        } else if(hovered) {
            return <h1 className="grayCart" onClick={() => addToCart(card)}>Carto</h1>
        }
    }





  return (

  <div 
    className = {`${className} cardHoverino`}
    ref={ref}
>

    <img src={card.image} alt={card.code} id = {card.code} className="image-grid" />
    {heartIcon()}
    {cartIcon()}

  </div>
  );
}



export default Card;
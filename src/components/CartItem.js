import React, {useState, useContext} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash as faSolidTrash } from "@fortawesome/free-solid-svg-icons"
import { faTrashAlt as faRegularTrash } from "@fortawesome/free-regular-svg-icons"

function CartItem({card}) {
  const [hovered, ref] = useHover()
  const {removeFromCart} = useContext(Context)

  const icon= hovered ? faSolidTrash : faRegularTrash

  return (
    <div className="cart-item">
      <FontAwesomeIcon
        icon = {icon}
        onClick={() => removeFromCart(card.code)}
        ref={ref} />
      <img className = "cartImageSet" alt="Hello" src={card.image} width="80em" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem
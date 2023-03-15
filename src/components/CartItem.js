import React, {useState, useContext} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash as faSolidTrash } from "@fortawesome/free-solid-svg-icons"
import { faTrashAlt as faRegularTrash } from "@fortawesome/free-regular-svg-icons"

function CartItem({cards}) {
  const [hovered, ref] = useHover()
  const {removeFromCart} = useContext(Context)

  const icon= hovered ? faSolidTrash : faRegularTrash

  return (
    <div className="cart-item">
      <FontAwesomeIcon
        className = "cartDeleteFromIcon"
        icon = {icon}
        onClick={() => removeFromCart(cards.code)}
        ref={ref} />
      <img alt="Hello" src={cards.image} width="30px" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem

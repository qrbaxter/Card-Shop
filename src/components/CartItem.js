import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}){
    const [hovered,ref] = useHover()
    const {removeFromCart} = useContext(Context)
    const iconClassName = hovered ? "cartColorFull" : "cartColorEmpty"

    return (
        <div className = "cart-item">
            <h1 
            className = {iconClassName}
            onClick={() => removeFromCart(item.id)}
            ref={ref}
            >Cart List</h1>
            <img alt = "testingImage" src="../testimage.png" width="130px" />
            <p>$5.99</p>
            
        </div>
        
    )

   
}


export default CartItem
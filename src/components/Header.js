import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function Header(){

    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "cartColorFull" : "cartColorEmpty"
    
    
    return (

    <header className = "headerpiece"> 
        <Link to ="/" className="cardslink">Cards</Link>
        <Link to="/cart" className="cartlink">
        <h1 className={`${cartClassName} carterinos`}>Cart</h1>
        </Link>
    </header>
    )
    }

export default Header
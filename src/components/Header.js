import React, {useContext} from "react"
import {Link} from "react-router-dom"

// import {Context} from "../Context"

function Header(){
    return (

    <header className = "headerpiece"> 
        <Link to ="/" className="cardslink logo">Cards</Link>
        <Link to="/cart" className="cartlink cta">Cart</Link>
    </header>
    )
    }

export default Header
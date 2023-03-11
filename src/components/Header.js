import React, {useContext} from "react"
import {Link} from "react-router-dom"

// import {Context} from "../Context"

function Header(){
    return (

    <header>
        <Link to ="/"><h3>Cards</h3></Link>
        <Link to="/cart"><h3>Cart</h3></Link>
    </header>
    )
    }

export default Header
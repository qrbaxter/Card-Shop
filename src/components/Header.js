import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function Header(){
    return (

    <header>
        <Link to ="localhost:3000/"><h1>Cards</h1></Link>
        <Link to="localhost:3000/cart"><h1>Cart</h1></Link>
    </header>
    )
    }

export default Header
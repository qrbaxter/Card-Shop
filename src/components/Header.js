import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function Header(){
    return (

    <div>
        <Link to ="localhost:3000/"><h3>Cards</h3></Link>
        <Link to="localhost:3000/cart"><h3>Cart</h3></Link>
    </div>
    )
    }

export default Header
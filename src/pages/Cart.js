import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart(){
  const [buttonText, setButtonText] = useState("Place Order")
  const [finishedOrderText, setFinishedOrderText] = useState(true)
  const {cartItems, emptyCart} = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

  const cartItemElements = cartItems.map(item => (
    <CartItem key = {item.code} card= {item} />
  ))
  
  function placeOrder() {
    setButtonText("Ordering...")
    setTimeout(()=> {
      console.log("Order Placed!")
      setButtonText("Place Order")
      emptyCart()
      setFinishedOrderText(true)
    }, 3000)
      setTimeout(()=>{
      setFinishedOrderText(false)
    },10000)
  }


    return (
      <main className = "cart-page">
        <div>
      <h1>Check Out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p> 
      {
          cartItems.length > 0 ? 
          <div className="order-button">
            <button onClick = {placeOrder}>{buttonText}</button>
          </div> :
          finishedOrderText ? 
          <div>
            <h1>Thankyou for your order! it is being processed, and should arrive within 5-10 business days.</h1>
          </div> :
          <div>
          <p>You have no items in your cart</p>
          </div>

      }
      </div>
      </main>
    )
}

export default Cart
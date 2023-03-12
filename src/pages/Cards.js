import React, {useContext} from "react"


import {Context} from "../Context"
import Card from "../components/Card"



function Cards(){
    const {allCards} = useContext(Context)

    const cardElements = allCards.map((card) => (
        <Card key={card.code} card={card} />
      ));
      

    return (

    <main>
        <h1 className = "cardsTitle">Cards</h1>
        <button className="moreCardBtn">See More Cards</button>
        <div className = "cardElementerino">
            {cardElements}
        </div>
       
    </main>
    )
    }

export default Cards
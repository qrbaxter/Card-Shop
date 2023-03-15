import React, {useContext} from "react"

import Card from "../components/Card"
import {Context} from "../Context"



function Cards(){
    const {allCards} = useContext(Context)

    const cardElements = allCards.map((cards) => (
        <Card key={cards.code} cards={cards} isFavorite = "false"/>
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
import React, {useContext} from "react"

import Card from "../components/Card"
import {Context} from "../Context"



function Cards(){
    const {allCards, fetchNewCards} = useContext(Context)

    const cardElements = allCards.map((card) => (
        <Card key={card.code} card={card} />
      ));
      

    return (

    <main>
        <h1 className = "cardsTitle">Cards</h1>
        <button className="moreCardBtn" onClick = {fetchNewCards}>See More Cards</button>
        <div className = "cardElementerino">
            {cardElements}
        </div>
       
    </main>
    )
    }

export default Cards
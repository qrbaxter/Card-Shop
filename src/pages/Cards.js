import React, {useContext, useState, useEffect} from "react"
import Context from "../Context"



function Cards(){
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
          .then((response) => response.json())
          .then((data) =>
            fetch(
              `https://apis.scrimba.com/deckofcards/api/deck/${data.deck_id}/draw/?count=20`
            )
          )
          .then((response) => response.json())
          .then((data) => setCards(data.cards))
          .catch((error) => console.log(error));
      }, []);





    return (

    <main>
        <h1 className = "cardsTitle">Cards</h1>
        <button className="moreCardBtn">See More Cards</button>

        <div>
           {cards.map((card)=>(
            <img src={card.image} alt={card.code} key={card.code} />
           ))}
        </div>
    </main>
    )
    }

export default Cards
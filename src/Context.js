import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    
    const [allCards, setAllCards] = useState([])

    
    const url = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
    useEffect(() => {

        fetch(url)
          .then((response) => response.json())
          .then((data) =>
            fetch(
              `https://apis.scrimba.com/deckofcards/api/deck/${data.deck_id}/draw/?count=20`
            )
          )
          .then((response) => response.json())
          .then((data) => setAllCards(data.cards))
          .catch((error) => console.log(error));
      }, []);

    return (
      <Context.Provider value = {{
        allCards, setAllCards
      }}>
        {children}
      </Context.Provider>
    )
}

export {ContextProvider, Context}
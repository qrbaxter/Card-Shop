import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    
    const [allCards, setAllCards] = useState([])
    const [cartItems, setCartItems] = useState([])

    
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

    function toggleFavorite(code) {
        const updatedArr = allCards.map((card)=> {
            if(card.code === code){
                return {...card, isFavorite: !card.isFavorite}
            }
            return card
        })
        setAllCards(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])

    }

    function removeFromCart(code) {
        setCartItems(prevItems => prevItems.filter(item=> item.code !==code))
    }

    function emptyCart(){
        setCartItems([])
    }

    return (
      <Context.Provider value = {{
        allCards,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart
      }}>
        {children}
      </Context.Provider>
    )
}

export {ContextProvider, Context}
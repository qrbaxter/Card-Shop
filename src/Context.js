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

    function toggleFavorite(id) {
        const updatedArr = allCards.map((card)=> {
            if(card.id === id){
                return {...card, isFavorite: !card.isFavorite}
            }
            return card
        })
        setAllCards(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])

    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item=> item.id !==id))
    }

    function emptyCart(){
        setCartItems([])
    }

    return (
      <Context.Provider value = {{
        allCards,
        setAllCards,
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
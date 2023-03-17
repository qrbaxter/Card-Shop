import React, {useState, useEffect} from "react"

const Context = React.createContext()

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
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
        .then((data) => {
          // Shuffle the cards before setting the state
          const shuffledCards = shuffleArray(data.cards);
          setAllCards(shuffledCards);
        })
        .catch((error) => console.log(error));
    }, []);
    

    

      async function fetchNewCards() {
        try {
          const newDeckResponse = await fetch('https://apis.scrimba.com/deckofcards/api/deck/new/');
          const newDeckData = await newDeckResponse.json();
          const cardsResponse = await fetch(
            `https://apis.scrimba.com/deckofcards/api/deck/${newDeckData.deck_id}/draw/?count=20`
          );
          const cardsData = await cardsResponse.json();
      
          const shuffledCards = shuffleArray(cardsData.cards);
          setAllCards(shuffledCards);
        } catch (error) {
          console.error(error);
        }
      }

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
        emptyCart,
        fetchNewCards
      }}>
        {children}
      </Context.Provider>
    )
}

export {ContextProvider, Context}
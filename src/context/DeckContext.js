import { createContext,useState } from 'react';
import Swal from 'sweetalert2';

const DeckContext = createContext();

export function DeckProvider ( { children } ) {
    //main deck
    const [deck, setDeck] = useState([]);

    //extra deck
    const [extraDeck, setExtraDeck] = useState([]);

    const handleAddToDeck = (cardToAdd) => {
      let sameCardsInDeck = deck.filter( item => item.id === cardToAdd.id)
      let sameCardsExtraDeck = extraDeck.filter( item => item.id === cardToAdd.id)
      console.log(sameCardsInDeck);
      if(sameCardsInDeck.length >= 3 || sameCardsExtraDeck.length >= 3){
        Swal.fire({
          title: 'Card could not be added to the deck',
          text: 'There are three (3) copies of that card already in the deck.',
          icon: 'error'
        })
      } else {
        if (
          cardToAdd.type === "Link Monster" ||
          cardToAdd.type === "XYZ Monster" ||
          cardToAdd.type === "XYZ Pendulum Effect Monster" ||
          cardToAdd.type === "Fusion Monster" ||
          cardToAdd.type === "Synchro Monster" ||
          cardToAdd.type === "Synchro Tuner Monster" ||
          cardToAdd.type === "Synchro Pendulum Effect Monster" ||
          cardToAdd.type === "Pendulum Effect Fusion Monster"
        ) {
          setExtraDeck((prevExtraDeck) => [...prevExtraDeck, cardToAdd]);
          Swal.fire({
            title: `${cardToAdd.name} added to the Extra-Deck`,
            text: "You may find it in the Deck section.",
            icon: "success",
          });
        } else {
          setDeck((prevDeck) => [...prevDeck, cardToAdd]);
          Swal.fire({
            title: `${cardToAdd.name} added to the Main Deck`,
            text: "You may find it in the Deck section.",
            icon: "success",
          });
        }
      }
    }

    const deleteFromDeck = (array, toDelete, setState) =>{
        let cardIndex = array.indexOf(toDelete)
        let toConcatOne = array.slice(0, cardIndex)
        let toConcatTwo = array.slice(cardIndex + 1)
        let newDeck = toConcatOne.concat(toConcatTwo)
        setState(newDeck)
      }


    return(
        <DeckContext.Provider value={ {deck, handleAddToDeck, deleteFromDeck, extraDeck, setDeck, setExtraDeck} } >
            { children }
        </DeckContext.Provider>
    );
}

export default DeckContext;
import { createContext,useState } from 'react';

const DeckContext = createContext();

export function DeckProvider ( { children } ) {

    const [deck, setDeck] = useState([]);

    //testing: extra deck
    const [extraDeck, setExtraDeck] = useState([]);

    const handleAddToDeck = (cardToAdd) => {
      // let sameCardsInDeck = deck.filter( item => item === cardToAdd)
      // console.log(sameCardsInDeck)
        //   console.log(deck);

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
        } else {
          setDeck((prevDeck) => [...prevDeck, cardToAdd]);
        }
        
        console.log(deck, extraDeck);

      // TO DO: probar con mover la funcion de chequeo de si la carta está en deck al scope de Declkist
      //Quizás eso sea lo que hace que en cada renderizado vuelva a ver los arrays vacíos.
        //   setDeck((prevDeck) => [...prevDeck, cardToAdd]);
    }

    const deleteFromDeck = (array, toDelete, setState) =>{
        let cardIndex = array.indexOf(toDelete)
        // console.log(cardIndex)
        let toConcatOne = array.slice(0, cardIndex)
        let toConcatTwo = array.slice(cardIndex + 1)
        let newDeck = toConcatOne.concat(toConcatTwo)
        // console.log(newDeck)
        setState(newDeck)
        // console.log(deck)
      }


    return(
        <DeckContext.Provider value={ {deck, handleAddToDeck, deleteFromDeck, extraDeck, setDeck, setExtraDeck} } >
            { children }
        </DeckContext.Provider>
    );
}

export default DeckContext;
import { createContext,useState } from 'react';

const DeckContext = createContext();

export function DeckProvider ( { children } ) {

    const [deck, setDeck] = useState([])
    


    const handleAddToDeck = (cardToAdd) => {
        // let sameCardsInDeck = deck.filter( item => item === cardToAdd)
        // console.log(sameCardsInDeck)
        // console.log(deck)
        

        // TO DO: probar con mover la funcion de chequeo de si la carta está en deck al scope de Declkist
        //Quizás eso sea lo que hace que en cada renderizado vuelva a ver los arrays vacíos.
        setDeck(prevDeck => [...prevDeck, cardToAdd])
    }

    const deleteFromDeck = (array, toDelete) =>{
        let cardIndex = array.indexOf(toDelete)
        // console.log(cardIndex)
        let toConcatOne = array.slice(0, cardIndex)
        let toConcatTwo = array.slice(cardIndex + 1)
        let newDeck = toConcatOne.concat(toConcatTwo)
        // console.log(newDeck)
        setDeck(newDeck)
        // console.log(deck)

      }


    return(
        <DeckContext.Provider value={ {deck, handleAddToDeck, deleteFromDeck} } >
            { children }
        </DeckContext.Provider>
    );
}

export default DeckContext;
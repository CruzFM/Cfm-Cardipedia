import { createContext,useState } from 'react';

const DeckContext = createContext();

export function DeckProvider ( { children } ) {

    const [deck, setDeck] = useState([])

    const handleAddToDeck = (cardToAdd) => {
        setDeck(prevDeck => [...prevDeck, cardToAdd])
    }


    return(
        <DeckContext.Provider value={ {deck, handleAddToDeck} } >
            { children }
        </DeckContext.Provider>
    );
}

export default DeckContext;
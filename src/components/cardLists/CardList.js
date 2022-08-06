//Hooks
import { useState, useEffect } from 'react';

//Services
import axios from 'axios';

export default function CardList(){

    const [cards, setCards ] = useState([]);

    //To avoid more api calls, the searches will be stored in this state.
    const [searchedCards, setSearchedCards] = useState([]);

    //To make a loader with a button
    const [loadValue, setLoadValue] = useState(10);

    useEffect( ()=>{
        const endPoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
        axios.get(endPoint)
        .then(res => {
          let apiData = res.data.data
          console.log(apiData)
          setCards(apiData) 
        });
    
    },[]);

    const handleClick = (e)=> {
        e.preventDefault()
        let cardName = e.target.cardTest.value;
    
        //create a regular expression for the .match search
        //the 'gi' means that it searches all the matches and it's case insensitive
        let serchRegEx = new RegExp(cardName, 'gi')
    
        //searches for a name coincidence with the given parameter.
        let newCards = cards.filter( (card) =>  card.name.match(serchRegEx) )
        setSearchedCards(newCards);
        setLoadValue(10);
        console.log(newCards);
    };

    const handleReset = () => {
        setSearchedCards([]);
        setLoadValue(10);
    }

    const handleLoad = () =>{
        setLoadValue(prevLoadValue => prevLoadValue + 10);
    }

    const loaderButton = () =>{
        if(searchedCards.length > 10 || searchedCards.length === 0){
            return(
                <button type='button' onClick={handleLoad} className="loaderButton">Load more</button>
            )
        }
    }

    return (
      <>
        <div className="App">
          <h2>Hola Fer</h2>
          <form onSubmit={handleClick}>
            <label>
              <input type="text" name="cardTest" />
            </label>
            <button type="submit">buscar por nombre</button>
            <button type="button" onClick={handleReset}>
              Reset Cards
            </button>
          </form>
        </div>

        <div className="containerCards">
          {searchedCards.length > 0 &&
            searchedCards.slice(0, loadValue).map((card) => {
              return (
                <div className="card">
                  <h4>{card.name}</h4>
                  <img src={`${card.card_images[0].image_url}`} alt="Card" />
                  <div>
                    <p>{card.desc}</p>
                  </div>
                  <div>
                    <button>clickeame, gato</button>
                  </div>
                </div>
              );
            })}

          {searchedCards.length === 0 &&
            cards.slice(0, loadValue).map((card) => {
              return (
                <div className="card">
                  <h4>{card.name}</h4>
                  <img src={`${card.card_images[0].image_url}`} alt="Card" />
                  <div>
                    <p>{card.desc}</p>
                  </div>
                  <div>
                    <button>clickeame, gato</button>
                  </div>
                </div>
              );
            })}

            {loaderButton()}

        </div>
      </>
    );
};
//Hooks
import { useState, useEffect, useContext } from 'react';


//Libraries
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeckContext from '../../context/DeckContext';
import Card from '../Card/Card';

//images
import SearchIcon from '../../images/search.png'

export default function CardList(){
    
    //------The cards displayed by default due to the API call
    const [cards, setCards ] = useState([]);

    //To avoid more API calls, the queries will be stored in this state.
    const [searchedCards, setSearchedCards] = useState([]);

    //To make a loader with a button
    const [loadValue, setLoadValue] = useState(10);

    useEffect( ()=>{
        const endPoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
        axios.get(endPoint)
        .then(res => {
          let apiData = res.data.data
          // console.log(apiData)
          setCards(apiData) 
        });
    
    },[]);


    //---------------To search for NAMES --------------
    const handleClick = (e)=> {
        e.preventDefault();
        let cardName = e.target.name.value;
    
        //--creates a regular expression for the .match search
        //--the 'gi' means that it searches all the matches and that it's case insensitive
        let serchRegEx = new RegExp(cardName, 'gi');
    
        //--searches for a name coincidence with the given parameter.
        let newCards = cards.filter( (card) =>  card.name.match(serchRegEx) )
        setSearchedCards(newCards);
        setLoadValue(10);
        // console.log(newCards);
    };

    //---------------To reset both search and value --------------

    const handleReset = () => {
        setSearchedCards([]);
        setLoadValue(10);
    }

    //---------------To load more content (10 cards) --------------
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

    //---------------To search for ARCHETYPES --------------

    //---For the <option> tag in the Archetypes form
    let archetypesForForms = [];
    cards.forEach( card =>{
        if(!archetypesForForms.includes(card.archetype)){
          archetypesForForms.push(card.archetype);
        }
    });

    //---For the handler submit on the Archetypes form
    const handleClickArchetype = (e) => {
      e.preventDefault();

      let archeValue = e.target.archetypes.value;

      let newCards = cards.filter((card) => card.archetype === archeValue);

      setSearchedCards(newCards);
      setLoadValue(10);

      // console.log(newCards);
    };

    //---------------To search for CARD TYPE --------------


    let typesForForms = [];
    cards.forEach( card =>{
        if(!typesForForms.includes(card.type) ){
          typesForForms.push(card.type);
        }
    });


    const handleClickCardType = (e) => {
      e.preventDefault();

      let cardTypeValue = e.target.type.value;

      let newCards = cards.filter((card) => card.type === cardTypeValue);

      setSearchedCards(newCards);
      setLoadValue(10);

      console.log(newCards);
    };

    return (
      <>
        <div className="App flex-column justify-center align-items-center to-center">
          <h2>Card pool</h2>
          <div className='to-center'>
            {/* Search by Name form*/}
            <form onSubmit={handleClick} className='grid searchBars'>
              <label>
                <input type="text" name="name" placeholder='Search by card name'/>
              </label>
              <button type="submit" className='searchIcon'>
                <img src={SearchIcon} alt='search'/>
              </button>
            </form>

            {/* Search by Archetype form*/}
            <form onSubmit={handleClickArchetype} className='grid searchBars'>
              <label>
                <select id="archetype" name="archetypes">
                  <option value='search-archetypes'>Search by Archetype</option>
                  {
                    archetypesForForms.sort().map( arche =>{
                      return(
                        <option value={ `${arche}` }>{arche}</option>
                      )
                    })
                  }
                </select>
              </label>
              <button type="submit" className='searchIcon'>
                <img src={SearchIcon} alt='search'/>
              </button>
            </form>

            {/* Search by Card Type form*/}
            <form onSubmit={handleClickCardType} className='grid searchBars'>
              <label>
                <select id='type' name='type'>
                  <option value='search-card-type'>Search by Card Type</option>
                  {
                    typesForForms.sort().map( type =>{
                      return(
                        <option value={ `${type}` }>{type}</option>
                      )
                    })
                  }
                </select>
              </label>
              <button className='searchIcon'>
                <img src={SearchIcon} alt='search'/>
              </button>
            </form>
          </div>

          {/* RESET BUTTON */}
          <button type="button" onClick={handleReset} className='bn632-hover bn28'>
              Reset Cards
          </button>

        </div>

        {cards.length < 1 && 
          <div className='flex justify-center'>
            <div class="loading">
                <div class="d1"></div>
                <div class="d2"></div>
            </div>
          </div>
        }

        <div className="containerCards to-center">
          {searchedCards.length > 0 &&
            searchedCards.slice(0, loadValue).map((card, idx) => {
              return (
                <Card card={card} idx={idx}/>
              );
            })}

          {searchedCards.length === 0 &&
            cards.slice(0, loadValue).map((card, idx) => {
              return (
                <Card card={card} idx={idx}/>
              );
            })
          }

          {loaderButton()}

        </div>
      </>
    );
};
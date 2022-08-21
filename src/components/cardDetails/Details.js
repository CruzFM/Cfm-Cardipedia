//Hooks
import { useEffect, useState, useContext} from 'react';

//Libraries
import { useParams } from 'react-router-dom';
import axios from 'axios';

//components
import DeckContext from '../../context/DeckContext';

export default function Details(){

    const [card, setCard] = useState({});


    const { handleAddToDeck } = useContext(DeckContext)

    let { id } = useParams();

    // console.log(id);

    useEffect( ()=>{
        const endPoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`;
        axios.get(endPoint)
            .then(res =>{
                const [apiData] = res.data.data;
                // console.log(apiData);
                setCard(apiData);
            })
    }, [])

    // console.log(card);

    return(
        <div>
           {Object.keys(card).length < 1 && <h1>ahora qué carajo pasa?</h1>}
           {Object.keys(card).length > 0  && 
           
           <div className='flex'>

                <div>  
                    <img src={`${card.card_images[0].image_url}`} alt='card' />
                </div>
                <div>
                    <h2>{card.name}</h2>
                    
                    <ul>
                        <li>Card type: {card.type}</li>
                        <li>Race: {card.race}</li>
                        <li>Archetype: {card.archetype}</li>
                    </ul>
                    <p>{card.desc}</p>
                    <div>
                        <h3>Pricing</h3>
                        <ul>
                            <li>Amazon: $ {card.card_prices[0].amazon_price}</li>
                            <li>Cardmarket: $ {card.card_prices[0].cardmarket_price}</li>
                            <li>Cool Stuff Inc: $ {card.card_prices[0].coolstuffinc_price}</li>
                            <li>E-bay: $ {card.card_prices[0].ebay_price}</li>
                            <li>TCG Player: $ {card.card_prices[0].tcgplayer_price}</li>
                        </ul>
                    </div>
                    <button onClick={() => handleAddToDeck(card)}>To deck</button>
                </div>  
            </div>
           }
        </div>

    )
}
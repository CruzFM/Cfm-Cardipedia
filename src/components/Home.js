import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home(){

    const [cards, setCards] = useState([])

    useEffect(() =>{
        const endPoint = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
        axios.get( endPoint )
            .then(res => setCards(res.data.data) )
    },[])

    let uniqueArquetypes = [];
    cards.forEach( card =>{
        if(!uniqueArquetypes.includes(card.archetype)){
            uniqueArquetypes.push(card.archetype)
        }

    })
    
    console.log(uniqueArquetypes)



    return(
        <div>
            <h1>Welcome to the YUGIOH card pool!</h1>
            <h2>Defining what to do here.</h2>
            <Link to='/cards/'>To Card pool</Link>
            <Link to='/deck'>To deck</Link>
        </div>
    )
};

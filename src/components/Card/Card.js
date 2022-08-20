import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DeckContext from '../../context/DeckContext';

export default function Card( {card, idx} ) {

    const { handleAddToDeck } = useContext(DeckContext)

  return (
    <div className="card" key={idx}>
      <h4>{card.name}</h4>
      <img src={`${card.card_images[0].image_url}`} alt="Card" />
      <div>
        <p>{card.desc}</p>
      </div>
      <div>
        <button>
          <Link to={`/details/${card.id}`}>Details</Link>
        </button>
        <button onClick={() => handleAddToDeck(card)}>To Deck</button>
      </div>
    </div>
  );
}

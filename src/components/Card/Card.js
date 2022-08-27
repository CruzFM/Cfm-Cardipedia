import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DeckContext from '../../context/DeckContext';

export default function Card( {card, idx} ) {

    const { handleAddToDeck } = useContext(DeckContext)

  return (
    <div className="card" key={idx}>
      <img src={`${card.card_images[0].image_url}`} alt="Card" />
      <div>
        <h4 className='text-center'>{card.name}</h4>
      </div>
      <div className='flex justify-space-between'>
        <button>
          <Link to={`/details/${card.id}`}>Details</Link>
        </button>
        <button onClick={() => handleAddToDeck(card)} className='to-deck-btn'>
          To Deck
        </button>
      </div>
    </div>
  );
}

import { useContext } from "react";
import DeckContext from "../../context/DeckContext";
import { Link } from "react-router-dom";

export default function Deck() {
  const { deck, deleteFromDeck } = useContext(DeckContext);
  return (
    <div>
      <div className="deck-title flex-column justify-center align-items-center">
        <h1>Your deck:</h1>
        <h3>Total cards in deck: {deck.length}</h3>
      </div>
      <div className="containerCards">
        {deck.map((card, idx) => {
          return (
            <div className="card" key={idx}>
              <img src={`${card.card_images[0].image_url}`} alt="Card" />
              <div>
                <h4>{card.name}</h4>
                <button>
                  <Link to={`/details/${card.id}`}>Details</Link>
                </button>
                <button onClick={() => deleteFromDeck(deck, card)}>
                  Delete me!
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* <aside>
        Let's see what happens
      </aside> */}
    </div>
  );
}

import { useContext } from "react";
import DeckContext from "../../context/DeckContext";
import { Link } from "react-router-dom";
import deleteImage from '../../images/delete.png';


export default function Deck() {
  const { deck, deleteFromDeck, extraDeck, setDeck, setExtraDeck } = useContext(DeckContext);
  return (
    <div>
      {deck.length > 0 && (
        <div className="deck-title flex-column justify-center align-items-center">
          <h2>Your deck:</h2>
          <h3>Total cards in Main Deck: {deck.length}</h3>
        </div>
      )}

      {deck.length < 1 && extraDeck.length < 1 && (
        <div className="deck--msg to-center flex justify-center align-items-center">
          <h2 className="text-center">
            You have no cards added, visit our card pool and choose your
            favorites!
          </h2>
        </div>
      )}

      <div className="containerCards to-center">
        {deck.map((card, idx) => {
          return (
            <div className="card" key={idx}>
              <img src={`${card.card_images[0].image_url}`} alt="Card" />
              <div>
                <h4 className="text-center">{card.name}</h4>
              </div>
              <div className="flex justify-space-between align-items-center">
                <button>
                  <Link to={`/details/${card.id}`}>Details</Link>
                </button>
                <button
                  onClick={() => deleteFromDeck(deck, card, setDeck)}
                  className="delete-btn"
                >
                  <img src={deleteImage} alt="delete-card" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {extraDeck.length > 0 && (
          <div className="deck-title flex-column justify-center align-items-center">
            <h2 className="text-center">Extra Deck</h2>
            <h3>Total cards in Extra-deck: {extraDeck.length}</h3>
          </div>
        )}

        <div className="containerCards to-center">
          {extraDeck.map((card, idx) => {
            return (
              <div className="card" key={idx}>
                <img src={`${card.card_images[0].image_url}`} alt="Card" />
                <div>
                  <h4 className="text-center">{card.name}</h4>
                </div>
                <div className="flex justify-space-between align-items-center">
                  <button>
                    <Link to={`/details/${card.id}`}>Details</Link>
                  </button>
                  <button
                    onClick={() =>
                      deleteFromDeck(extraDeck, card, setExtraDeck)
                    }
                    className="delete-btn"
                  >
                    <img src={deleteImage} alt="delete-card" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

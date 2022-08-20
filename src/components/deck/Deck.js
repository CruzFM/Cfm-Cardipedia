import { useContext } from "react";
import DeckContext from "../../context/DeckContext";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Deck() {
  const { deck } = useContext(DeckContext);
  return (
    <div>
      <h2>I'm deck</h2>
      <div className="containerCards">
        {deck.map((card) => {
          return (
            <div className="card">
              <h4>{card.name}</h4>
              <img src={`${card.card_images[0].image_url}`} alt="Card" />
              <div>
                <p>{card.desc}</p>
              </div>
              <div>
                <button>
                  <Link to={`/details/${card.id}`}>Details</Link>
                </button>
                <button onClick={() => console.log("we should delete this!")}>
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

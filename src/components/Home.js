import { Link } from 'react-router-dom';
import ashBlossom from '../images/ash-blossom.jpg'

import cyberNachter from '../images/cyber-nachter.png';

export default function Home(){

    return (
      <div className="home flex-colums justify-center align-items-center to-center">
        <h2 className="text-center">Welcome to the YUGIOH card pool!</h2>
        <div className='home--images flex align-items-center justify-center'>
          <div className='home--images_cards'>
            <Link to='/cards/'>
              <img src={cyberNachter} alt="Navigate to Cards" />
            </Link>
            <div>Card pool</div>
          </div>
          <div className='home--images_deck'>
            <Link to='/deck'>
              <img src={ashBlossom} alt='Navigate to deck'/>       
            </Link>
            <div>Deck</div>
          </div>
        </div>


            {/* <h3 className='text-center'>Where you can seach your favorite cards from a vast database provided by YGOpro</h3> */}
            {/* <Link to='/cards/'>To Card pool</Link>
                    <Link to='/deck'>To deck</Link> */}
      </div>
    );
};

import { Link } from 'react-router-dom';
import banner from '../images/banner-ygo.png'

export default function Home(){

    return(
        <div className='home flex-column justify-center align-items-center to-center'>
            <h2 className='text-center'>Welcome to the YUGIOH card pool!</h2>
            <img src={banner} alt='Yugioh Banner'/>
            <h3 className='text-center'>Where you can seach your favorite cards from a vast database provided by YGOpro</h3>
            <Link to='/cards/'>To Card pool</Link>
            <Link to='/deck'>To deck</Link>
        </div>
    )
};

import { Link } from 'react-router-dom';

export default function Home(){

    return(
        <div className='home flex-column justify-center align-items-center'>
            <h1>Welcome to the YUGIOH card pool!</h1>
            <h2>Where you can seach your favorite cards from a vast database provided by YGOpro</h2>
            <Link to='/cards/'>To Card pool</Link>
            <Link to='/deck'>To deck</Link>
        </div>
    )
};

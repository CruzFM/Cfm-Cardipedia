import { Link } from 'react-router-dom';

export default function Home(){

    return(
        <div>
            <h2>Welcome to the YUGIOH card pool!</h2>
            <h3>Defining what to do here.</h3>
            <Link to='/cards/'>To Card pool</Link>
            <Link to='/deck'>To deck</Link>
        </div>
    )
};

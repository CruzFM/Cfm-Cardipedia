import { Link } from 'react-router-dom';


export default function Navbar(){
    return(

        <header>
            <nav className='flex navbar'>
                <h1><Link to='/'>Home</Link></h1>
                <ul>
                    <li><Link to='/cards'>Card Pool</Link></li>
                    <li><Link to='/deck'>Deck</Link></li>
                </ul>
            </nav>
        </header>
    )
}
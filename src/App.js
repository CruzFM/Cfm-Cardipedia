//--------------Hooks-------------
import { useState, useEffect } from 'react';



//--------------Styles-------------
import './App.css';

//--------------Components---------------
import CardList from './components/cardLists/CardList';
import Home from './components/Home';
import Deck from './components/deck/Deck';
import Details from './components/cardDetails/Details';


//--------------Services---------------
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {


  

  return (
    <>
      <Navbar />

      <Routes>

        <Route exact path='/' element={ <Home />} />
        <Route path='/cards' element={ <CardList />} />
        <Route path='/deck' element={ <Deck />} />
        <Route path='/details/:id' element={<Details />} />

      </Routes>

      <Footer />
    </>

  );
}

export default App;

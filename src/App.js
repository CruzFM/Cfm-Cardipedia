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
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';


function App() {


  

  return (
    <>
      <Routes>

        <Route exact path='/' element={ <Home />} />
        <Route path='/cards/' element={ <CardList />} />
        <Route path='/deck' element={ <Deck />} />
        <Route path='/details' element={<Details />} />

      </Routes>

    </>

  );
}

export default App;

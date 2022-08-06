//--------------Hooks-------------
import { useState, useEffect } from 'react';

//--------------Styles-------------
import './App.css';

//--------------Components---------------
import CardList from './components/cardLists/CardList';


//--------------Services---------------
import axios from 'axios'

function App() {


  

  return (
    <CardList />
  );
}

export default App;

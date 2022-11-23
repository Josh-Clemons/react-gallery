import React from 'react';
import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';


function App() {

  const [galleryItems, setGalleryItems] = useState([]);

  useEffect( () => {getGallery()}, []) // check this syntax, tried it from memory

  const getGallery = ()=> {Axios.get('/gallery').then((response) => {
    setGalleryItems(response.data);
  })};

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery Items: {JSON.stringify(galleryItems)}</p>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;

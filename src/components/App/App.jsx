import React from 'react';
import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';



function App() {

  const [galleryItems, setGalleryItems] = useState([]);

  const getGallery = ()=> {Axios.get('/gallery').then((response) => {
    setGalleryItems(response.data);
  })};

  useEffect( () => {getGallery()}, []);






    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList getGallery={getGallery} galleryItems={galleryItems}/>
      </div>
    );
};

export default App;

import React from 'react';
import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';



function App() {

  const [galleryItems, setGalleryItems] = useState([]);

  const getGallery = (arg)=> {Axios.get('/gallery').then((response) => {
    setGalleryItems(response.data);
  })};

  useEffect( () => {getGallery()}, []);


    return (
      <div className="App">
        <header className="bg-success App-header">
          <h1 className="App-title">My Sweet Pics!</h1>
        </header>
        <GalleryList getGallery={getGallery} galleryItems={galleryItems}/>
      </div>
    );
};

export default App;

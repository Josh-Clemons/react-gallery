import React from 'react';
import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import AddPictureForm from '../AddPictureForm/AddPictureForm';




function App() {

  const [galleryItems, setGalleryItems] = useState([]);

  const getGallery = (arg)=> {Axios.get('/gallery').then((response) => {
    setGalleryItems(response.data);
  })};

  useEffect( () => {getGallery()}, []);


    return (
      <div className="App">
        <div className="cork">
          <AddPictureForm getGallery={getGallery}/>
          <GalleryList getGallery={getGallery} galleryItems={galleryItems}/>
        </div>
      </div>
    );
};

export default App;

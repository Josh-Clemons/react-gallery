import './GalleryItem.css'
import { useState } from 'react';
import Axios from 'axios';

function GalleryItem(props) {
    const [imgState, setImgState] = useState(true);

    const increaseLike = () => {
        Axios.put('/gallery/like/' + props.galleryItem.id)
            .then((response) => {
                props.getGallery('4');
            }).catch(err => {
                alert('error PUTing like:', err)
            });
    };

    return (
        <div className='galleryItem'>
            <h3>Gallery Item</h3>
            
            {imgState ? <img src={props.galleryItem.path} onClick={ ()=> setImgState(!imgState)}/> : <div className="imgDetails" onClick={ ()=> setImgState(!imgState)}> {props.galleryItem.description}</div>}
            
            <h4>Total Likes: {props.galleryItem.likes}</h4>
            <div className="btn btn-primary deleteButton"
                onClick={()=> increaseLike()}
            >Like?</div>
        </div>
        
    );
};

export default GalleryItem;
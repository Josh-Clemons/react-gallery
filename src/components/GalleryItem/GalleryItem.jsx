import './GalleryItem.css'
import { useState } from 'react';
import Axios from 'axios';

function GalleryItem(props) {
    const [imgState, setImgState] = useState(true);
    const [likeState, setLikeState] = useState(false);

    const increaseLike = () => {
        if (likeState) {
            return;
        } else {
        Axios.put('/gallery/like/' + props.galleryItem.id)
            .then((response) => {
                props.getGallery();
            }).catch(err => {
                alert('error PUTing like:', err)
            });
        };
    };

    return (
        <div className='galleryItem'>            
            {imgState ? <img src={props.galleryItem.path} onClick={ ()=> setImgState(!imgState)}/> : <div className="border border-secondary rounded imgDetails" onClick={ ()=> setImgState(!imgState)}> {props.galleryItem.description}</div>}
            
            <div className={likeState ? "m-2 p-1 btn btn-secondary likeButton" : "m-2 p-1 btn btn-primary likeButton"}
                onClick={()=> increaseLike() + setLikeState(true)}>
                {likeState ? "Thank you!" : "I love it!"}
            </div>
            <div className='lovedItText'>{props.galleryItem.likes > 0 ? 
                (props.galleryItem.likes === 1 ? 
                    props.galleryItem.likes + " person loved it!" : 
                    props.galleryItem.likes + " people loved it!") :
                ""}
            </div>
        </div>
        
    );
};

export default GalleryItem;
import './GalleryItem.css'
import { useState } from 'react';

function GalleryItem(props) {
    const [imgState, setImgState] = useState(true);
    const [likeCount, setLikeCount] = useState(props.galleryItem.likes);

    return (
        <div className='galleryItem'>
            <h3>Gallery Item</h3>
            
            {imgState ? <img src={props.galleryItem.path} onClick={ ()=> setImgState(!imgState)}/> : <div className="imgDetails" onClick={ ()=> setImgState(!imgState)}> {props.galleryItem.description}</div>}
            
            <h4>Total Likes: {likeCount}</h4>
            <div className="btn btn-primary deleteButton"
                onClick={()=> setLikeCount(likeCount +1)}
            >Like?</div>
        </div>
        
    );
};

export default GalleryItem;
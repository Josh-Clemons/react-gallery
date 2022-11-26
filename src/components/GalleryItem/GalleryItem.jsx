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

    const deletePhoto = () => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Axios.delete('/gallery/' + props.galleryItem.id)
                    .then(response => {
                        Swal.fire('Deleted!', '', 'success');
                        props.getGallery();
                    }).catch(error => {
                        alert('error DELETEing:', error)
                    });
            } else if (result.isDenied) {
                Swal.fire('Changes are canceled', '', 'info');
            };
        });
    };



    return (
        <div className='galleryItem'>
            {imgState ? <img src={props.galleryItem.path} onClick={() => setImgState(!imgState)} /> : <div className="imgDetails" onClick={() => setImgState(!imgState)}> {props.galleryItem.description}</div>}

            <div className='buttonHolder'>
                <div className={likeState ? "m-1 p-1 btn btn-secondary likeButton" : "m-1 p-1 btn btn-primary likeButton"}
                    onClick={() => increaseLike() + setLikeState(true)}>
                    {likeState ? "Thank you!" : "I love it!"}
                </div>
                <div className='btn btn-danger m-1 p-1' onClick={() => deletePhoto()}>Delete</div>
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
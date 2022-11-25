import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'


function GalleryList(props) {



    return(
        <>
            <h3>My Tinder Pics</h3>
            <div className="container pictureHolder">
                {props.galleryItems.map(galleryItem => (
                    <GalleryItem key={galleryItem.id} getGallery={props.getGallery} galleryItem={galleryItem}/>
                ))}
            </div>
        </>
    )
};


export default GalleryList;
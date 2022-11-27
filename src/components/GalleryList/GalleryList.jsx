import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'


function GalleryList(props) {


    // This component maps over the database items and sends each one to
    // the galleryItem component. Where it is made into a polaroid replica.
    return(
        <>
            <div className="container pictureHolder">
                {props.galleryItems.map(galleryItem => (
                    <GalleryItem key={galleryItem.id} getGallery={props.getGallery} galleryItem={galleryItem}/>
                ))}
            </div>
        </>
    )
};


export default GalleryList;
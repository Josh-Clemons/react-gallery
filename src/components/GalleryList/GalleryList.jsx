import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'


function GalleryList(props) {



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
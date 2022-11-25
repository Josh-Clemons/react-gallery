import GalleryItem from "../GalleryItem/GalleryItem";



function GalleryList(props) {



    return(
        <>
            <h3>My Tinder Pics</h3>

            {props.galleryItems.map(galleryItem => (
                <GalleryItem key={galleryItem.id} getGallery={props.getGallery} galleryItem={galleryItem}/>
            ))}
        </>
    )
};


export default GalleryList;
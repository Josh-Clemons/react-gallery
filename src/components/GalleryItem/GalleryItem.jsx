function GalleryItem(props) {
    return (
        <>
            <h3>Gallery Item</h3>
            <img src={props.galleryItem.path}/>
        </>
        
    )   
}

export default GalleryItem;
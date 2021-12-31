

const ImageGalleryItem = ({ images }) => (
    <>
        {images.map(image => (
            <li className="ImageGalleryItem" key={image.id}>
                <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
            </li>
        ))}
    </>

);

export default ImageGalleryItem

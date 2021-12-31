

const ImageGalleryItem = ({ images,onToggleModal }) => (
    <>
        {images.map(image => (
            <li className="ImageGalleryItem" key={image.id} onClick={onToggleModal}>
                <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
            </li>
        ))}
    </>

);

export default ImageGalleryItem

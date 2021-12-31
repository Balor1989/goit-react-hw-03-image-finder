import { Component } from "react/cjs/react.production.min";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import axios from "axios";
import Button from "./Button/Button";
import Loading from "./plugins/loading";
import Modal from "./Modal/Modal";


class App extends Component {

  state = {
    searchValue: '',
    arrayOfImages: [],
    page: 1,
    visible: false,
    showModal: false,
    modalImage: null,
    modalTag:null
  };

componentDidUpdate(prevProps, prevState) {

      if (prevState.searchValue !== this.state.searchValue) {
      this.setState({ page: 1, arrayOfImages: [], visible: true })
        this.fetch()   
      return  
   };

      if (prevState.page !== this.state.page) {
          this.fetch()
      }    
      };


  async fetch() {
    try {
      Loading.circle()
      const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.page}&key=23825879-78d35eabdb1bf9c22a9a5e768&image_type=photo&orientation=horizontal&per_page=12`)
      const pictures = await response.data
        
      if (pictures.totalHits === 0) {
        this.setState({ visible: false})
        toast.info('No pictures found for your request')
        Loading.remove()
        return
      }

      this.setState(prevState => ({
        arrayOfImages: [...prevState.arrayOfImages, ...pictures.hits],
      }));

      if (this.state.arrayOfImages.length === pictures.totalHits) {
        this.setState({ visible: false})
      }
      if (this.state.page > 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }
    catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
    Loading.remove()
  };

  
  handleClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };

  handleFormSubmit = value => {
    this.setState({ searchValue: value })
  };

 
  toggleModal = () => {
    this.setState(({showModal}) =>({ showModal: !showModal })
    )
  }
  getImageforModal = (image, tag) => {
    this.toggleModal()
    this.setState({ modalImage: image, modalTag: tag });
  };

  render() {
    const {arrayOfImages, visible, showModal,modalImage,modalTag} = this.state
    return (
      <>
        <ToastContainer />
        <Searchbar formSubmit={this.handleFormSubmit} />
        <ImageGallery >
          <ImageGalleryItem images={arrayOfImages}
            onGetImage={this.getImageforModal}

          />
        </ImageGallery>
        {visible && <Button
          onHandleClickLoadMore={this.handleClickLoadMore} />}
        {showModal &&
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt={modalTag} />
          </Modal>}
      </>
    )
  }
}

export default App;

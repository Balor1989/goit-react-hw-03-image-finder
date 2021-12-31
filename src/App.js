import { Component } from "react/cjs/react.production.min";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import axios from "axios";
import Button from "./Button/Button";


class App extends Component {

  state = {
    searchValue: '',
    arrayOfImages: [],
    page: 1,
    visible:false
  };

  async fetch() {
    try {
      const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.page}&key=23825879-78d35eabdb1bf9c22a9a5e768&image_type=photo&orientation=horizontal&per_page=12`)
      const pictures = await response.data
        
      if (pictures.totalHits === 0) {
        this.setState({ visible: false})
        toast.info('No pictures found for your request')
        return
      }
      
      this.setState(prevState => ({
        arrayOfImages: [...prevState.arrayOfImages, ...pictures.hits],
      }));

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });

      if (this.state.arrayOfImages.length === pictures.totalHits) {
        this.setState({ visible: false})
      }
    }
    catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  
  handleClickLoadMore = (e) => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };

  handleFormSubmit = value => {
    this.setState({ searchValue: value })
  };

 componentDidUpdate(prevProps, prevState) {

    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({ page: 1, arrayOfImages: [], visible: true })
      this.fetch()    
   };

    if (prevState.page !== this.state.page) {
     this.fetch()
   };
     
  };

  render() {
    return (
      <>
        <h1>Hello!</h1>
        <ToastContainer />
        <Searchbar formSubmit={this.handleFormSubmit} />
        <ImageGallery >
          <h2>Gallery</h2>
          <ImageGalleryItem images={this.state.arrayOfImages}/>
        </ImageGallery>
        {this.state.visible && <Button onHandleClickLoadMore={this.handleClickLoadMore} />}
        </>
    )
  }
}

export default App;

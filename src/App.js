import { Component } from "react/cjs/react.production.min";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import axios from "axios";


class App extends Component {

  state = {
    searchValue: '',
    pictures: null
  };

  handleFormSubmit = value => {
    this.setState({ searchValue: value })
  };
   async componentDidUpdate(prevProps, prevState) {
     if (prevState.searchValue !== this.state.searchValue) {
          console.log("111")
          try {
              const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchValue}&page=1&key=23825879-78d35eabdb1bf9c22a9a5e768&image_type=photo&orientation=horizontal&per_page=12`)
              const pictures = await response.data
              return this.setState({ pictures })
            }
          catch (error) {
              console.log(error);
              return Promise.reject(error);
            }
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
          <ImageGalleryItem />
        </ImageGallery>
        </>
    )
  }
}

export default App;

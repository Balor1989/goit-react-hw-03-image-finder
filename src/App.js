import { Component } from "react/cjs/react.production.min";
import axios from "axios";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";


class App extends Component {

  state = {
    searchValue: '',
  };

  handleFormSubmit = value => {
    this.setState({ searchValue: value })
  };

  async componentDidMount() {
    try {
     const response = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=23825879-78d35eabdb1bf9c22a9a5e768&image_type=photo&orientation=horizontal&per_page=12')
      const pictures = await response.data
     return this.setState({pictures})
    }
    catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  render() {
    return (
      <>
        <h1>Hello!</h1>
        <ToastContainer />

        <Searchbar formSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <h2>Gallery</h2>
          <ImageGalleryItem />
        </ImageGallery>
        </>
    )
  }
}

export default App;

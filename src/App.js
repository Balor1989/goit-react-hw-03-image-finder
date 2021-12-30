import { Component } from "react/cjs/react.production.min";
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

  render() {
    return (
      <>
        <h1>Hello!</h1>
        <ToastContainer />

        <Searchbar formSubmit={this.handleFormSubmit} />
        <ImageGallery values={this.state.searchValue}>
          <h2>Gallery</h2>
          <ImageGalleryItem />
        </ImageGallery>
        </>
    )
  }
}

export default App;

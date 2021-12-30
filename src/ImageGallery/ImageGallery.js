import { Component } from "react/cjs/react.production.min";
import axios from "axios";

class ImageGallery extends Component {

    state = {
        pictures: null
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.values !== this.props.values) {
          try {
              const response = await axios.get(`https://pixabay.com/api/?q=${this.props.values}&page=1&key=23825879-78d35eabdb1bf9c22a9a5e768&image_type=photo&orientation=horizontal&per_page=12`)
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
            <ul className="ImageGallery">
                {this.props.children}
            </ul>
        )
    };
};

export default ImageGallery
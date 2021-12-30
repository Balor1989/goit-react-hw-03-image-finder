import { Component } from "react/cjs/react.production.min";

class ImageGallery extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.values !== this.props.values) {
            console.log("Изменился запрос")
        }
    }

    render() {
        return (
            <ul className="ImageGallery">
                {this.props.children}
            </ul>
        )
    }
}

export default ImageGallery
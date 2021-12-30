import { Component } from "react/cjs/react.production.min";
import axios from "axios";
import Searchbar from "./Searchbar/Searchbar";


class App extends Component {

  state = {
    pictures:null
  }

  handleFormSubmit = searchValue => {
    console.log(searchValue)
  }

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
        <Searchbar formSubmit={this.handleFormSubmit} />
        </>
    )
  }
}

export default App;

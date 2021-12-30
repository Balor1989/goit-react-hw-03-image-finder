import { Component } from "react/cjs/react.production.min";
import axios from "axios";


class App extends Component {

  async componentDidMount() {
    try {
     const response = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=23825879-78d35eabdb1bf9c22a9a5e768&image_type=photo&orientation=horizontal&per_page=12')
      const data = response.data
      console.log(data)
     return data 
    }
    catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
  

  render() {
    return (
      <h1>Hello!</h1>
    )
  }
}

export default App;

import { Component } from "react/cjs/react.production.min";
import { FcSearch} from 'react-icons/fc';



class Searchbar extends Component {

    state = {
        searchValue: ''
    }
    
    handleChange = (e) => {
        this.setState({searchValue: e.currentTarget.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        this.setState({ searchValue: "" });
    }

    render() {
        return (
       
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="Search images"
                    value={this.setState.searchValue}
                onChange={this.handleChange}
                />
                <button type="submit">
                    <FcSearch style={{ width: 25, height: 25 }} />
                </button>
            </form>
        );
    }
}
export default Searchbar
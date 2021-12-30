import { Component } from "react/cjs/react.production.min";
import { FcSearch } from 'react-icons/fc';
import {toast} from 'react-toastify';



class Searchbar extends Component {

    state = {
        searchValue: ''
    }
    
    handleChange = (e) => {
        this.setState({searchValue: e.currentTarget.value })
    }
    handleSubmit = (e) => {
        const {searchValue} = this.state
        e.preventDefault()
        console.log("submit")
        if (!searchValue.trim()) {
            toast.warn('Please enter what are you looking for')
            return
        }
        this.props.formSubmit(searchValue)
        // this.setState({ searchValue: "" });
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
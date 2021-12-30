import { Component } from "react/cjs/react.production.min";
import { FcSearch} from 'react-icons/fc';



class Searchbar extends Component {



    render() {
        return (
       
            <form>
                <input type="text" />
                <button type="button">
                    <FcSearch style={{ width: 25, height: 25 }} />
                </button>
            </form>
        );
    }
}
export default Searchbar
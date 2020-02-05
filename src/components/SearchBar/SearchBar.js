import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css'

class SearchBar extends Component {
    state={
        searchValue: ''
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({searchValue: event.target.value});
    }

    render(){
        return (
            <div>
                <h1 className={"pb-4 h1-color mt-4 w-6"}>Поврзи се со настаните околу тебе</h1>
                <div className="active-pink-3 active-pink-4 mb-4 pt-4 d-flex">
                    <input onChange={this.handleChange.bind(this)} className={"form-control mr-1"} type="text" placeholder="Локација" aria-label="Search" />
                    <button className={"btn btn-rounded active-pink-btn ml-2"} onClick={this.props.searchByLocation.bind(this,this.state.searchValue)}>Пребарај</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
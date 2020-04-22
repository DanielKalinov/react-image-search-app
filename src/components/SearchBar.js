import React, { Component } from 'react';
import './SearchBar.css';
import M from 'materialize-css';

export class SearchBar extends Component {
    state = { value: '' };

    handleChange = e => {
        this.setState({ value: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='input-field'>
                    <i className="material-icons prefix">search</i>
                    <input type="text" id='search-bar' value={this.state.value} onChange={this.handleChange}/>
                    <label htmlFor='search-bar'>Search for images</label>
                </div>
            </form>
        )
    }
}

export default SearchBar;

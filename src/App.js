import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar'; 
import ImageList from './components/ImageList';

class App extends Component {
  state = { images: [] };

  onSubmit = async value => {
    let apiKey = 'j-3UktEoGOGQqZ5lFBJvYmAtD7FNBOL6SlxwzkZ6a4I';

    const response = await fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${apiKey}` 
      }
    }).then(response => response.json());

    this.setState({ images: response.results });
  }

  render() {
    return (
      <div className="App container">
        <div className="col s12">
          <SearchBar onSubmit={this.onSubmit}/>

          <ImageList images={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;

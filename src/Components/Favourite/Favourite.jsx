import React, { Component } from 'react';
import Movies from "../Movies/Movies";

class Favourite extends Component {
    state = {}
    render() { 
        return (
            this.props.favourites.length ? <Movies movies={this.props.favourites}></Movies> : <h1>You had no favourite movies</h1>
          );
    }
}
 
export default Favourite;
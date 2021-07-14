import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = {
    newMovieName: "",
  };

  handleOnChange = (e) => {
    let value = e.target.value;
    this.setState({
      newMovieName: value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(this.props);
      this.props.setMovies(this.state.newMovieName);
      // <Link to="/"></Link>
      // window.history.replaceState({}, "", "/");
      // this.props.history("/");
    }
  };

  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">
          <img src="logo.svg" alt="" />
          </Link>
        </div>
        <div className="search-btn">
          <input
            className="search-movies"
            value={this.state.newMovieName}
            type="text"
            placeholder="Search"
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>

        <div className="header-links">
          <div className="header-link">
            <Link to="/">Home</Link>
          </div>

          <div className="header-link">
            <Link to="/fav">Favourite</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
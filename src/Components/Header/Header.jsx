import React, { Component } from "react";
/* With withRouter we get access to this.props.history which we can't have bcz we are in header. Generally we have access to that when we use route to render component so to change url we use it*/
import { Link, withRouter } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.myRef = React.createRef();
  // }

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
      // console.log(this.props);
      this.props.setMovies(this.state.newMovieName);
      this.props.history.push('/');
      // this.myRef.current.click();      // also we can use this in img to redirect url
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

export default withRouter(Header);

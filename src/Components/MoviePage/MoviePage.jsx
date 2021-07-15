import axios from "axios";
import React, { Component } from "react";
import YouTube from "react-youtube";
import "./MoviePage.css";

import RedHeart from "../../red-heart.png";
import WhiteHeart from "../../white-heart.png";

import { API_URL, API_KEY } from "../../API/secrets";

class MoviePage extends Component {
  state = {
    videoObject: {},
    isLiked: false,
  };

  async componentDidMount() {
    const idx = this.props.favourites.findIndex(
      (movie) => movie.id === this.props.location.state.id
    );
    if (idx !== -1) this.setState({ isLiked: true });

    // https://api.themoviedb.org/3/movie/324552/videos?api_key=bdd243ea847239dc0799805e63e189f0&language=en-US
    let response = await axios.get(
      `${API_URL}/movie/${this.props.location.state.id}/videos?api_key=${API_KEY}&language=en-US`
    );

    let videoObject = response.data.results.filter((videoObj) => {
      if (videoObj.type === "Trailer" && videoObj.site === "YouTube") {
        return true;
      }
      return false;
    });

    this.setState({
      videoObject: videoObject[0],
    });
  }

  render() {
    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
    let { title, tagline, vote_average, poster_path, overview } =
      this.props.location.state;

    // console.log(this.props);

    return (
      <div className="movie-page">
        <div className="movie-page-poster">
          <img src={poster_path} alt="" />
        </div>

        <div className="movie-page-details">
          <button
            className="like-btn"
            onClick={() => {
              this.props.setFavourites(this.props.location.state);
              this.setState({isLiked: !this.state.isLiked});
            }}
          >
            {this.state.isLiked ? (
              <img src={RedHeart} alt="" className="heart" />
            ) : (
              <img src={WhiteHeart} alt="" className="heart" />
            )}
          </button>
          <div className="movie-title-info">
            <h1>
              {title} <br></br> {vote_average} IMDB
            </h1>
            <span>{tagline}</span>
            <p>{overview}</p>
          </div>
          <div className="movie-trailer">
            <YouTube videoId={this.state.videoObject.key} opts={opts}></YouTube>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;

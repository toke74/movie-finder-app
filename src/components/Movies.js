import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movieActions";

export class Movies extends Component {
  state = {
    Title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    this.props.getMovies("home");
  }
  onSubmit = e => {
    const { Title } = this.state;
    this.props.getMovies(Title);

    e.preventDefault();
  };

  render() {
    const { movies } = this.props;
    const search = movies
      ? movies.map(movie => {
          return (
            <div key={movie.imdbID} className=" mb-4 col-md-3">
              <div className="well text-center">
                <img src={movie.Poster} alt="movie poster" />
                <h5>{movie.Title}</h5>
                <Link
                  to={`/moviedetails/${movie.imdbID}`}
                  className="btn btn-lg btn-info"
                >
                  Movie Details
                </Link>
              </div>
            </div>
          );
        })
      : "Enter Movie Title in search box";

    return (
      <div className="container searchMovie">
        <div className="container">
          <h3 className="text-center">Search For Movie</h3>
        </div>
        <form className="mb-5" onSubmit={this.onSubmit}>
          <div className="row">
            <div className=" offset-2 col-md-7">
              <div className="form-group  mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="Title"
                  value={this.state.movieSearch}
                  onChange={this.onChange}
                  placeholder="Search Movies..."
                />
              </div>
            </div>
            <div className="col-md-3">
              <button type="submit" className="btn  btn-info">
                Search Movies
              </button>
            </div>
          </div>
        </form>
        <div className="container">
          <div id="movies" className="row">
            {search}
          </div>
        </div>
      </div>
    );
  }
}
Movies.propTypes = {
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(Movies);

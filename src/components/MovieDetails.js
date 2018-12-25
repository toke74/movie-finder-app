import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovieById } from "../actions/movieActions";

export class MovieDetails extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.props.getMovieById(this.props.match.params.id);
  }
  render() {
    const { movie } = this.props;

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <img src={movie.Poster} alt="poster" className="thumbnail" />
          </div>
          <div className="col-md-8">
            <h2 className="movieTitle">{movie.Title}</h2>
            <ul className="movieList list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="well ">
            <h3>Plot</h3>
            {movie.Plot}
            <hr />
            <Link
              to={`https://imdb.com/title/${movie.imdbID}`}
              target="_blank"
              className="btn btn-lg btn-info"
            >
              View IMDB
            </Link>
            <Link to="/" className="btn btn-default">
              Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  getMovieById: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { getMovieById }
)(MovieDetails);

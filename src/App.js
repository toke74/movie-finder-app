import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <nav className="navbar navbar-light bg-info navbarWrapper">
              <Link to="/" className="navbar-brand text-white" href="#">
                Movie Finder App
              </Link>
            </nav>

            <Switch>
              <Route exact path="/" component={Movies} />
              <Route exact path="/moviedetails/:id" component={MovieDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

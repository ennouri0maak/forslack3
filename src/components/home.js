import React, { Component } from "react";
import MoviesList from "../projectList";

 class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <MoviesList />
      </div>
    );
  }
}
export default Home;
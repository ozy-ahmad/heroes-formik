import React, { Component } from "react";
import FormPage from "./FormPage";
import ListPage from "./ListPage";
class Home extends Component {
  render() {
    return (
      <div>
        <FormPage />
        <ListPage />
      </div>
    );
  }
}

export default Home;

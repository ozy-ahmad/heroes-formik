import React, { Component } from "react";
import axios from "axios";

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
  }
  componentDidMount() {
    const URL = "http://localhost:8000/Heroes";
    axios.get(URL).then((res) => {
      console.log(res.data);

      const heroes = res.data;
      this.setState({ heroes });
    });
  }
  render() {
    const list = this.state.heroes.map((item) => (
      <div className="col-4">
        <div
          key={item.id}
          className="card"
          style={{
            width: "17rem",
          }}
        >
          <img src={item.values.imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.values.fullName}</h5>
            <p className="card-text">{item.values.description}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="container">
          <div className="row">{list}</div>
        </div>
      </div>
    );
  }
}

export default ShowList;

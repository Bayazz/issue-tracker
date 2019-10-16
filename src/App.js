import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Data from "./components/Data.js";
import Issue from "./components/Issue";

class App extends Component {
  state = { data: Data.getAll() };

  componentWillMount() {
    Data.on("change", () => {
      this.setState({
        data: Data.getAll()
      });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <h3>
          IssueTracker
          <span style={{ color: "#807f7d", fontSize: "15px" }}>
            by Bayaz
          </span>{" "}
        </h3>
        <div className="row">
          <div className="container jumbotron">
            <Form data={data} />
          </div>
        </div>

        <div>
          <Issue data={data} />
        </div>
      </div>
    );
  }
}

export default App;

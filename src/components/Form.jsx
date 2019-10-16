import React, { Component } from "react";
import Input from "../common/input";
import Select from "../common/select";
import Data from "./Data.js";

class Form extends Component {
  // state = {
  //   data: JSON.parse(localStorage.getItem("savedData"))
  // };

  state = {
    issue: {
      id: "",
      severity: "Low",
      description: "",
      assignedTo: "",
      status: "Open"
    }
  };

  submitForm = e => {
    e.preventDefault();
    const { issue } = this.state;

    const { data } = this.props;
    const issueObj = Object.assign({}, issue); // copy global property to assign local variable to the state! Otherwise global property will allways have the reference to the state!
    issueObj.id = Date.now();
    let savedData = [];
    data ? (savedData = [issueObj, ...data]) : (savedData = [issueObj]);

    localStorage.setItem("savedData", JSON.stringify(savedData));

    let issueReset = {
      id: "",
      severity: "Low",
      description: "",
      assignedTo: "",
      status: "Open"
    };

    this.setState({ issue: issueReset });

    Data.setData(savedData);
  };
  handleInput = e => {
    console.log(e);
    let issue = Object.assign({}, this.state.issue);
    issue[e.target.id] = e.target.value;
    this.setState({ issue });
  };

  render() {
    const { issue } = this.state;
    return (
      <React.Fragment>
        <h4>Add New Issue:</h4>
        <form id="myForm" onSubmit={this.submitForm}>
          <Input
            name="Description"
            id="description"
            placeholder="Describe the issue..."
            handleInput={this.handleInput}
            value={issue.description}
          />
          <Select
            name="Severity"
            id="severity"
            handleInput={this.handleInput}
            options={["Low", "Medium", "Heigh"]}
          />
          <Input
            name="Assigned To"
            id="assignedTo"
            placeholder="Enter responsible..."
            handleInput={this.handleInput}
            value={issue.assignedTo}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;

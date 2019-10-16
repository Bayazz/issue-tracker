import React, { Component } from "react";
import Data from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";

class Issue extends Component {
  handleDelete = issueID => {
    const { data } = this.props;

    const issues = data.filter(issue => issue.id !== issueID);
    localStorage.setItem("savedData", JSON.stringify(issues));
    Data.setData(issues);

    console.log("Deleted issue");
  };
  handleClose = issueID => {
    const { data } = this.props;
    const issues = data.map(issue => {
      if (issue.id === issueID) {
        issue.status === "Open"
          ? (issue.status = "Closed")
          : (issue.status = "Open");

        return issue;
      }
      return issue;
    });

    localStorage.setItem("savedData", JSON.stringify(issues));
    Data.setData(issues);
    console.log("Issue closed");
  };

  render() {
    const { data } = this.props;
    if (!data) return null;

    return data.map(issue => (
      <div className="row" key={issue.id}>
        <div className="issue">
          <small>Issue ID: {issue.id}</small> <br />
          <span className="badge badge-info">{issue.status}</span>
          <h5 style={{ marginTop: "10px" }}>{issue.description}</h5>
          <p>
            <FontAwesomeIcon icon={faClock} /> {issue.severity}
          </p>
          <p style={{ marginTop: "-10px" }}>
            <FontAwesomeIcon icon={faUser} /> {issue.assignedTo}
          </p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.handleClose(issue.id)}
            disabled={issue.status === "Closed" ? "true" : ""}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.handleDelete(issue.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }
}

export default Issue;

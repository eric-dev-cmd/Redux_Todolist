import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class Sort extends Component {
  onSort = (sortBy, sortValue) => {
    var { onSort } = this.props;
    onSort({
      by: sortBy,
      value: sortValue,
    });
  };
  render() {
    console.log(this.props.sort);
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown fs-14">
          <button
            className="btn btn-lg btn-danger dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <b>Sort</b>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={() => this.onSort("name", 1)}>
              <a className="dropdown-item fs-12">
                Sort A-Z <i className="far fa-sort-alpha-down"></i>{" "}
                <i
                  className={
                    this.props.sort.by === "name" && this.props.sort.value === 1
                      ? "far fa-check fw-bold float-end align-items-center text-center"
                      : ""
                  }
                ></i>
              </a>
            </li>
            <li onClick={() => this.onSort("name", -1)}>
              <a className="dropdown-item fs-12">
                Sort Z-A <i className="fas fa-sort-alpha-up-alt"></i>
                <i
                  className={
                    this.props.sort.by === "name" &&
                    this.props.sort.value === -1
                      ? "far fa-check fw-bold float-end align-items-center text-center"
                      : ""
                  }
                ></i>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li onClick={() => this.onSort("status", 1)}>
              <a className="dropdown-item fs-12">
                Status:{" "}
                <b>
                  <span className="badge bg-danger">Active</span>
                </b>
                <i
                  className={
                    this.props.sort.by === "status" &&
                    this.props.sort.value === 1
                      ? "far fa-check fw-bold float-end align-items-center text-center"
                      : ""
                  }
                ></i>
              </a>
            </li>
            <li onClick={() => this.onSort("status", -1)}>
              <a className="dropdown-item fs-12">
                Status:{" "}
                <b>
                  <span className="badge bg-success" style={{ width: "41px" }}>
                    Hide
                  </span>
                </b>
                <i
                  className={
                    this.props.sort.by === "status" &&
                    this.props.sort.value === -1
                      ? "far fa-check fw-bold float-end align-items-center text-center"
                      : ""
                  }
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    //La 1 arrow func =>
    onSort: (sort) => {
      dispatch(actions.sortTask(sort));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);

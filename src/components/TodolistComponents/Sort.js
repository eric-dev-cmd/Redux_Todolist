import React, { Component } from "react";
class Sort extends Component {
  // componentWillReceiveProps(nextProps) {
  //   // console.log(nextProps);
  //   // console.log(this.props.onReceiveSortBy);
  //   // console.log(this.props.onReceiveSortValue);
  // }
  onClick = (sortBy, sortValue) => {
    var { onReceiveSort } = this.props;
    // console.log(sortBy + " _ " + sortValue);
    onReceiveSort(sortBy, sortValue);
    // console.log(sortBy + sortValue);
  };
  render() {
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
            <li onClick={() => this.onClick("name", 1)}>
              <a className="dropdown-item fs-12">
                Sort A-Z <i className="far fa-sort-alpha-down"></i>{" "}
                <i
                  className={
                    this.props.onReceiveSortBy === "name" &&
                    this.props.onReceiveSortValue === 1
                      ? "far fa-check fw-bold float-end align-items-center text-center"
                      : ""
                  }
                ></i>
              </a>
            </li>
            <li onClick={() => this.onClick("name", -1)}>
              <a className="dropdown-item fs-12">
                Sort Z-A <i className="fas fa-sort-alpha-up-alt"></i>
                <i
                  className={
                    this.props.onReceiveSortBy === "name" &&
                    this.props.onReceiveSortValue === -1
                      ? "far fa-check fw-bold float-end align-items-center text-center"
                      : ""
                  }
                ></i>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li onClick={() => this.onClick("status", 1)}>
              <a className="dropdown-item fs-12">
                Status:{" "}
                <b>
                  <span className="badge bg-danger">Active</span>
                </b>
                <i
                  className={
                    this.props.onReceiveSortBy === "status" &&
                    this.props.onReceiveSortValue === 1
                      ? "far fa-check fw-bold float-end align-items-center text-center"
                      : ""
                  }
                ></i>
              </a>
            </li>
            <li onClick={() => this.onClick("status", -1)}>
              <a className="dropdown-item fs-12">
                Status:{" "}
                <b>
                  <span className="badge bg-success" style={{ width: "41px" }}>
                    Hide
                  </span>
                </b>
                <i
                  className={
                    this.props.onReceiveSortBy === "status" &&
                    this.props.onReceiveSortValue === -1
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

export default Sort;

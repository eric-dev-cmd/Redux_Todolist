import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";
class TaskFormSearchSort extends Component {
  render() {
    // var { onReceiveSortBy, onReceiveSortValue } = this.props;
    return (
      <div className="row mt-3">
        <Search />
        <Sort
          onReceiveSort={this.props.onReceiveSort}
          onReceiveSortBy={this.props.onReceiveSortBy}
          onReceiveSortValue={this.props.onReceiveSortValue}
        />
      </div>
    );
  }
}

export default TaskFormSearchSort;

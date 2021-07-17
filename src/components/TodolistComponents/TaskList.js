import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
      // -1: all, 1: active, 0: hide
    };
  }
  onChangeFilterTable = (event) => {
    var { filterName, filterStatus } = this.state;
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    var { onFilterTable } = this.props;
    /**Save on STORE */
    onFilterTable({
      name: name === "filterName" ? value : filterName,
      status: name === "filterStatus" ? value : filterStatus,
    });
    this.setState({
      [name]: value,
    });
  };
  render() {
    // console.log(this.props.tasks);
    var { tasks, filterTable, keyword, sort } = this.props;
    console.log(sort);
    // console.log(filterTable);
    var { filterName, filterStatus } = this.state;
    //var tasks = this.props.tasks
    if (filterTable) {
      if (filterTable.name) {
        tasks = tasks.filter((task, index) => {
          var name = task.name.toLowerCase();
          return name.indexOf(filterTable.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filterTable.status === -1) {
          return task;
        } else {
          return task.status === (filterTable.status === 1 ? true : false);
        }
      });
    }
    // console.log(this.props.keyword);
    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) {
          return sort.value;
        } else if (a.name < b.name) {
          return -sort.value;
        } else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) {
          return -sort.value;
        } else if (a.status < b.status) {
          return sort.value;
        } else return 0;
      });
    }
    tasks = tasks.filter((task, index) => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    var elementTask = tasks.map((task, index) => {
      return <TaskItem task={task} key={task.id} index={index} />;
    });
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control form-control-lg"
                name="filterName"
                value={filterName}
                onChange={this.onChangeFilterTable}
              />
            </td>
            <td>
              <select
                className="form-control form-control-lg"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChangeFilterTable}
              >
                <option value={-1}>All</option>
                <option value={0}>Hide</option>
                <option value={1}>Active</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elementTask}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    //La 1 arrow func =>
    onFilterTable: (filter) => {
      dispatch(actions.filterTask(filter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

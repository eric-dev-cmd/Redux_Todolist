import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class TaskItem extends Component {
  onSetUpdateStatus = () => {
    // var { task, onReceiveUpdateStatus } = this.props;
    // onReceiveUpdateStatus(task.id);
    this.props.onUpdateStatus(this.props.task.id);
  };
  onSetDelete = () => {
    var { task, onDeleteTask, onCloseForm } = this.props;
    onDeleteTask(task.id);
    onCloseForm();
  };
  onSetUpdate = () => {
    var { onUpdateTask, onToggleForm, task } = this.props;
    onToggleForm();
    // console.log(task);
    onUpdateTask(task);
  };
  render() {
    var { task, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={task.status ? "badge bg-danger" : "badge bg-success"}
            onClick={this.onSetUpdateStatus}
          >
            {task.status ? "Active" : "Hide"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-lg btn-outline-danger"
            onClick={this.onSetUpdate}
          >
            <i className="far fa-user-edit me-2"></i>Update
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-lg btn-danger"
            onClick={this.onSetDelete}
          >
            <i className="far fa-trash me-2"></i>Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    //La 1 arrow func =>
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onToggleForm: () => {
      dispatch(actions.openForm());
    },
    onUpdateTask: (task) => {
      dispatch(actions.updateTask(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);

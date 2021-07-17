import React, { Component } from "react";
import TaskFormAdd from "./TodolistComponents/TaskFormAdd";
import TaskFormSearchSort from "./TodolistComponents/TaskFormSearchSort";
import TaskList from "./TodolistComponents/TaskList";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      sortValue: 1,
    };
  }
  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Ruby",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Java",
        status: true,
      },
      {
        id: this.generateID(),
        name: "ReactJs",
        status: true,
      },
      // {
      //   id: this.generateID(),
      //   name: "PHP",
      //   status: true,
      // },
      // {
      //   id: this.generateID(),
      //   name: "VueJs",
      //   status: false,
      // },
      // {
      //   id: this.generateID(),
      //   name: "AngularJs",
      //   status: false,
      // },
    ];
    // console.log(tasks);
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  isDisplayFormAdd = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearForm({
      id: "",
      name: "",
      status: false,
    });
  };

  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
  onSetExit = () => {
    this.setState({
      isDisplayForm: false,
    });
  };

  // onReceiveSort = (sortBy, sortValue) => {
  //   // console.log(sortBy + " _ " + sortValue);
  //   this.setState({
  //     sortBy: sortBy,
  //     sortValue: sortValue,
  //   });
  //   // console.log(this.state.sortBy);
  //   // console.log(this.state.sortValue);
  // };
  render() {
    var { sortBy, sortValue } = this.state;
    var { isDisplayForm } = this.props;

    // // console.log(sortBy, sortValue);
    // 

    // var tasks = this.state.tasks
    return (
      <div className="col-12 home-product-item-wrapper">
        <h3 className="text-center fw-bold">To do list</h3>
        <div className="card">
          <div className="card-body">
            <div className="container">
              <div className="text-center">
                <h1>Workflow Management</h1>
                <hr />
              </div>
              <div className="row">
                {/* Form add */}

                <TaskFormAdd />
                <div
                  className={
                    isDisplayForm
                      ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 card pt-2"
                      : "col-xs-12 col-sm-12 col-md-12 col-lg-12 card pt-2"
                  }
                >
                  <button
                    type="button"
                    className="btn btn-lg btn-danger"
                    style={{ width: "100px" }}
                    onClick={this.isDisplayFormAdd}
                  >
                    <i className="fas fa-user-plus me-2"></i>
                    <b>Add Job</b>
                  </button>
                  {/* <button
                    type="button"
                    className="btn btn-lg btn-info mt-3"
                    style={{ width: "200px" }}
                    onClick={this.onGenerateData}
                  >
                    <i className="fas fa-user-plus me-2"></i>Generate Data
                  </button> */}
                  {/* Task Form Search && Sort */}
                  <TaskFormSearchSort />
                  {/* Task List  */}
                  <div className="row mt-3">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <TaskList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    //La 1 arrow func =>
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearForm: (task) => {
      dispatch(actions.updateTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);

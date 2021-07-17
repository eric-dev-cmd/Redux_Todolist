import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class TaskFormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  onSetExit = () => {
    // this.props.onReceiveExit();
    this.props.onCloseForm();
  };
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
    // this.onSetExit();
  };
  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onSetExit();
  };
  componentWillMount() {
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status,
      });
    } else {
      this.props.onClearForm({
        id: "",
        name: "",
        status: false,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);

    if (nextProps && nextProps.itemEditing) {
      console.log(nextProps);
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status,
      });
    } else if (nextProps && nextProps.itemEditing === null) {
      console.log("FSfsdf");
    }
  }
  render() {
    var { isDisplayForm } = this.props;
    if (!isDisplayForm) return null;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card py-2 px-2">
          <div className="border bg-danger d-flex align-content-center align-items-center justify-content-between">
            <div className="py-2 fw-bold text-center ml-140 text-white">
              {this.props.itemEditing.id === "" ? "ADD JOB" : "UPDATE JOB"}
            </div>
            <div>
              <button
                type="button"
                className="btn btn-default"
                onClick={this.onSetExit}
              >
                <i className="fad fa-window-close me-2 text-white fs-20"></i>
              </button>
            </div>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label>Name :</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  value={this.state.name}
                  onChange={this.onHandleChange}
                />
              </div>
              <label>Status :</label>
              <select
                className="form-control form-control-lg"
                required="required"
                name="status"
                value={this.state.status}
                onChange={this.onHandleChange}
              >
                <option value={true}>Active</option>
                <option value={false}>Hide</option>
              </select>
              <br />
              <div className="text-center fw-bold">
                <button
                  type="submit"
                  className="btn btn-lg btn-danger badge-color"
                >
                  <b>
                    {/* <i className="far fa-user-plus"></i>{" "} */}
                    {this.props.itemEditing.id === "" ? "Add" : "Update"}
                  </b>
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-lg btn-outline-danger badge-color "
                  onClick={this.onClear}
                >
                  <b>
                    <i className="fad fa-window-close"></i> Cancel
                  </b>
                </button>
              </div>
            </form>
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
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onClearForm: (task) => {
      dispatch(actions.updateTask(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskFormAdd);
// export default TaskFormAdd;

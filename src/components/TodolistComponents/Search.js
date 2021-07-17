import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: "",
    };
  }
  onSetSearchKeyword = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSetEnterButtonSearch = () => {
    var { onSearch } = this.props;
    var { keywords } = this.state;
    onSearch(keywords);
  };
  render() {
    var { keywords } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control fs-14"
            placeholder="Nhập từ khóa..."
            name="keywords"
            value={keywords}
            onChange={this.onSetSearchKeyword}
          />

          <button
            className="btn btn-danger btn-lg badge-color"
            type="button"
            onClick={this.onSetEnterButtonSearch}
          >
            <i className="fas fa-search me-2"></i>Search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    //La 1 arrow func =>
    onSearch: (keyword) => {
      dispatch(actions.searchTask(keyword));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

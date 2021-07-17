import * as types from "./../constants/ActionTypes";

// 2 row => take data show data
var data = JSON.parse(localStorage.getItem("tasks"));

var initialState = data ? data : [];
console.log(initialState);
// var initialState = [];

var s4 = () => {
  var randomstring = require("randomstring");
  var x = randomstring.generate({
    charset: "alphanumeric",
    length: 50,
    readable: true,
    // capitalization: "lowercase",
  });
  return x;
};
var generateID = () => {
  return s4();
};
var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      // console.log("ID so vs ban dau", id);
      // console.log(index);
      result = index;
      console.log(result);
      return result;
    }
  });
  return result;
};
var myReducer = (state = initialState, action) => {
  var id = "";
  var index = -1;
  switch (action.type) {
    case types.LISTALL:
      return state;
    case types.SAVE_TASK:
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status,
      };
      console.log(task.id);
      if (!task.id) {
        task.id = generateID();
        // console.log(newTask);
        state.push(task);
      } else {
        index = findIndex(state, task.id);
        console.log(index);
        state[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      // console.log(state);
      return [...state];
    case types.UPDATE_STATUS:
      // console.log(action);
      id = action.id;
      index = findIndex(state, id);
      // console.log(index);
      if (index !== -1) {
        //C1 state[index].status = !state[index].status;
        //C2 var cloneTask = { ...state[index] };
        // cloneTask.status = !cloneTask.status;
        //C2 state[index] = cloneTask;
        state[index] = {
          ...state[index],
          status: !state[index].status,
        };
        localStorage.setItem("tasks", JSON.stringify(state));
        // console.log(state);
      }
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(state));
      }

      return [...state];
    default:
      return state;
  }
};

export default myReducer;

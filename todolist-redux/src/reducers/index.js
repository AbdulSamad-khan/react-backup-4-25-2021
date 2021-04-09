import { combineReducers } from "redux";
const todoField = (todo = "", action) => {
  if (action.type === "INPUT_FIELD") {
    return action.payload;
  }
  return todo;
};

const todoList = (todoList = [], action) => {
  if (action.type === "TODO_LIST") {
    return [...todoList, action.payload];
  } else if (action.type === "DELETE_TODO") {
    return todoList.filter((e, index) => index !== action.payload);
  }
  return todoList;
};

export default combineReducers({
  todoField: todoField, // user input
  listOfTodo: todoList, // list of todos e.g user input
});

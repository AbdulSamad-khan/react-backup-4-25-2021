import React, { Component } from "react";
import { connect } from "react-redux";
import { setInput, todoListAction, deleteTodoItem } from "../actions";

class Field extends Component {
  renderList() {
    return this.props.listOfTodo.map((element, id) => {
      return (
        <div key={id}>
          {id + 1}.{element}
          <button
            onClick={() => {
              this.props.deleteTodoItem(id);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}> TodoList via Redux</h1>
        <input
          type="text"
          onChange={(e) => this.props.setInput(e.target.value)}
          value={this.props.todoField}
        />
        <button onClick={() => this.props.todoListAction(this.props.todoField)}>
          Submit Todo
        </button>
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {
  setInput: setInput,
  todoListAction: todoListAction,
  deleteTodoItem: deleteTodoItem,
})(Field);

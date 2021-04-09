import React from "react";

class Todo extends React.Component {
  // arr = ["Shopping", "Studying"];
  constructor(props) {
    super(props);
    this.state = { todo: "", todoList: [], clicked: false };
  }
  // using controlled events

  onChangeInput = (event) => {
    this.setState({ todo: event.target.value });
  };

  addTodo = () => {
    let { todo, todoList } = this.state;
    todoList.push(todo); // updated array
    this.setState({ todoList: todoList }); // set the updated the array
  };
  deleteTodo = (event) => {
    console.log(event.target.value);
    let index = event.target.value;
    if (index > -1) {
      this.state.todoList.splice(index, 1);
    }
    this.setState({ todoList: this.state.todoList }); //updated array
  };
  showList = () => {
    this.setState({ clicked: true });
  };
  generateList = () => {
    return this.state.todoList.map((items, index) => {
      return (
        <li key={index}>
          {items}
          <button value={index} onClick={this.deleteTodo}>
            delete
          </button>
        </li>
      );
    });
  };

  render() {
    if (this.state.clicked) {
      return (
        <div>
          <input
            type="text"
            onChange={this.onChangeInput}
            value={this.state.todo}
            placeholder="Enter a todo.."
          />
          <br />
          <button onClick={this.addTodo}> Add Todo </button>
          <button onClick={this.showList}>Show</button>
          <ol> {this.generateList()} </ol>
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            onChange={this.onChangeInput}
            value={this.state.todo}
          />
          <br />
          <button onClick={this.addTodo}> Add Todo </button>
          <button onClick={this.showList}>Show</button>
        </div>
      );
    }
  }
}
export default Todo;

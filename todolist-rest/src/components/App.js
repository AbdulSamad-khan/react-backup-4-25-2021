import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={TodoList} />
        <Route path="/todo/new" exact component={CreateTodo} />
        <Route path="/todo/edit" exact component={EditTodo} />
      </BrowserRouter>
    </div>
  );
};

export default App;

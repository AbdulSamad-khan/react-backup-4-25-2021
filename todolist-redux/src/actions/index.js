//  Action creater

export const setInput = (input) => {
  // return Action
  return {
    type: "INPUT_FIELD",
    payload: input,
  };
};

export const todoListAction = (todo) => {
  return {
    type: "TODO_LIST",
    payload: todo,
  };
};

export const deleteTodoItem = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

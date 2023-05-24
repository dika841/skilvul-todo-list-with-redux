export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FILTER_ACTIVETODO = "FILTER_ACTIVETODO";
export const FILTER_COMPLETETODO = "FILTER_COMPLETETODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
});
export const updateTodo = (id, newTitle) => ({
  type: "UPDATE_TODO",
  payload: {
    id: id,
    title: newTitle,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

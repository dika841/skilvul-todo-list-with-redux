import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  FILTER_TODO,
} from "../action/todosAction";

const initialState = {
  todo: [
    {
      id: 1,
      title: "Buy Milk",
      completed: false,
    },
  ],
  filterTodo: "ALL",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload.id
            ? { ...state, title: action.payload.title }
            : item
        ),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case FILTER_TODO:
      return {
        ...state,
        filterTodo: (state.filterTodo = action.payload),
      };
    default:
      return state;
  }
};
export default todoReducer;

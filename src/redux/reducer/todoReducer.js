import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  FILTER_ACTIVETODO,
  FILTER_COMPLETETODO,
} from "../action/todosAction";

const initialState = {
  todo: [
    {
      id: 1,
      title: "Makan",
      completed: false,
    },
  ],
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
            : todo
        ),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload ? { ...item, completed: true } : item
        ),
      };
    case FILTER_ACTIVETODO:
      return {
        ...state,
        todo: state.todo.map((item) => item),
      };
    case FILTER_COMPLETETODO:
      return {
        ...state,
        todo: state.todo.filter((item) =>
          item.id === action.payload ? { ...item, completed: true } : item
        ),
      };
    default:
      return state;
  }
};
export default todoReducer;

import TODOs from "../../data/dummy-data";
import Todo from "../../modals/todo";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/todo";

const initialState = {
  alltodo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, alltodo: [...state.alltodo, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        alltodo: [
          ...state.alltodo.filter((todo) => todo.id !== action.payload),
        ],
      };
    case UPDATE_TODO:
      const todoIndex = state.alltodo.findIndex(
        (todo) => todo.id === action.pid
      );
      const updateTodo = new Todo();
  }
  return state;
};

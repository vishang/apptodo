export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addtodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};

export const deletetodo = (todo) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

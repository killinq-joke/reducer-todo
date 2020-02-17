import React, { useReducer } from "react";
import reducer, {
  initialState,
  INPUT_CHANGE,
  ADD_TODO,
  MARK_COMPLETED,
  CLEAR_COMPLETED
} from "./reducers";
import uuid from "uuid";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = e => {
    const inputValue = e.target.value;
    dispatch({ type: INPUT_CHANGE, payload: inputValue });
  };
  const addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: state.newTodoValue,
      id: uuid(),
      completed: false
    };
    state.newTodoValue = "";
    dispatch({ type: ADD_TODO, payload: newTodo });
  };
  const clearCompleted = e => {
    e.preventDefault();

    dispatch({ type: CLEAR_COMPLETED });
  };
  const markCompleted = id => {
    dispatch({ type: MARK_COMPLETED, payload: id });
  };
  return (
    <div>
      <form>
        <label htmlFor="todo">create a todo</label>
        <input
          id="todo"
          name="todo"
          onChange={onChange}
          value={state.newTodoValue}
        ></input>
        <button type="button" onClick={addTodo}>
          ADD
        </button>
        <button type="button" onClick={clearCompleted}>
          CLEAR
        </button>
      </form>
      {state.todos.map(todo => {
        const color = todo.completed ? "green" : "red";
        return (
          <button
            onClick={evt => {
              markCompleted(todo.id);
            }}
            key={todo.id}
            style={{ color }}
          >
            {todo.task}
          </button>
        );
      })}
    </div>
  );
}

import React, { useReducer } from "react";
import uuid from "uuid";

const initialState = {
  todos: [],
  newTodoValue: ""
};

const INPUT_CHANGE = "INPUT_CHANGE";
const ADD_TODO = "ADD_TODO";
const MARK_COMPLETED = "MARK_COMPLETED";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

function reducer(state, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      console.log(action.payload);
      return {
        ...state,
        newTodoValue: action.payload
      };
    case ADD_TODO:
      const newTodo = action.payload;
      return {
        ...state,
        todos: state.todos.concat(newTodo)
      };
    case MARK_COMPLETED:
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo.id === id) {
            
            return {
              ...todo,
            completed: !todo.completed
            } 
          }
          return todo;
        })
      }  
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      }  
    default:
      // if the action.type does not match any of the cases in the switch,
      // we still need to return app state
      return state;
  }
}

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
    state.newTodoValue = '';
    dispatch({ type: ADD_TODO, payload: newTodo });
  };
  const clearCompleted = e => {
    e.preventDefault();
    
    dispatch({ type: CLEAR_COMPLETED})
  }
  const markCompleted = id => {
    
    dispatch({type: MARK_COMPLETED, payload: id})
  }
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
        <button type='button' onClick={addTodo}>ADD</button>
        <button type='button' onClick={clearCompleted}>CLEAR</button>
      </form>
      {state.todos.map(todo => {
        const color = todo.completed ? 'green' : 'red';
        return(
        <button onClick={evt => {markCompleted(todo.id)}} key={todo.id} style={{color}}>{todo.task}</button>
        )
      })}
    </div>
  );
}

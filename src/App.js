import React, { useReducer } from "react";
import uuid from 'uuid'

const initialState = {
  todos: [],
  newTodoValue: ""
}

const INPUT_CHANGE = 'INPUT_CHANGE'
const ADD_TODO = 'ADD_TODO'
const MARK_COMPLETED = 'MARK_COMPLETED'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

function reducer(state, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      console.log(action.payload)
      return {
        ...state,
        newTodoValue: action.payload,
      }
    case ADD_TODO: 
    const newTodo = action.payload
    return {
      todos: state.todos.concat(newTodo)
    }
      default:
      // if the action.type does not match any of the cases in the switch,
      // we still need to return app state
      return state
    }
  }

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onChange = e => {
    
    const inputValue = e.target.value
    dispatch({ type: INPUT_CHANGE, payload:  inputValue })
  }
  return(
    <div>
      <label htmlFor='todo'>create a todo</label>
      <input name='todo' onChange={onChange} value={state.newTodoValue}></input>
    </div>
  )
}
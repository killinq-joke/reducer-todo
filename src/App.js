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

export default function App() {

  return(
    <div>
      <label></label>
      <input></input>
    </div>
  )
}
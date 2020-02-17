import React from 'react';

export const initialState = {
  todos: [],
  newTodoValue: ""
};

export const INPUT_CHANGE = "INPUT_CHANGE";
export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";


export default function reducer(state, action) {
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
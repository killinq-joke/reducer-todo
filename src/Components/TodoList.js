import React from "react";
import Todo from "./Todo";
export default function TodoList(props) {
  const { todos, markCompleted } = props;
  return (
    <div>
      {todos.map(todo => {
        const color = todo.completed ? "green" : "red";
        return (
          <Todo
            key={todo.id}
            color={color}
            markCompleted={markCompleted}
            todo={todo}
          />
        );
      })}
    </div>
  );
}

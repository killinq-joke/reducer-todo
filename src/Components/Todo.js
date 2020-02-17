import React from "react";
export default function Todo(props) {
  const { todo, markCompleted, color } = props;
  return (
    <button
      onClick={evt => {
        markCompleted(todo.id);
      }}
      style={{ color }}
    >
      {todo.task}
    </button>
  );
}

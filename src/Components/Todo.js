import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: white;
  border: 0px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export default function Todo(props) {
  const { todo, markCompleted, color } = props;
  return (
    <Button
      onClick={evt => {
        markCompleted(todo.id);
      }}
      style={{ color }}
    >
      {todo.task}
    </Button>
  );
}

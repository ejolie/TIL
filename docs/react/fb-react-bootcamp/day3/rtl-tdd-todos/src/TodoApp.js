import React, { useState, useCallback, useRef } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TDD 배우기",
      done: true
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true
    }
  ]);

  const nextId = useRef(3); // 새로 추가할 항목에서 사용할 id

  const onInsert = useCallback(
    (text) => {
      // 새 항목 추가 후
      setTodos(
        todos.concat({
          id: nextId.current,
          text,
          done: false
        })
      );
      // nextId 값에 1 더하기
      nextId.current += 1;
    },
    [todos]
  );
  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} />
    </>
  );
};

export default TodoApp;

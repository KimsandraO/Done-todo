import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo._id}>
          <input type="checkbox" checked={todo.completed} readOnly />
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

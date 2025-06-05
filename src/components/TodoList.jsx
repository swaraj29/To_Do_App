import React from "react";
import TodoItem from "./TodoItem";

// This component shows the list of all todos
const TodoList = ({ todos, setTodos, setEditId }) => {
  return (
    // Container for the list of todos
    <ul className="space-y-2">
      {/* Map through each todo and create a TodoItem for it */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setEditId={setEditId}
        />
      ))}
    </ul>
  );
};

export default TodoList;

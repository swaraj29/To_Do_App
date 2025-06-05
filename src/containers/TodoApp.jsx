import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

// This is the main container that holds our todo app
const TodoApp = () => {
  // Keep track of all our todo items
  const [todos, setTodos] = useState([]);
  // Keep track of which todo we're editing (if any)
  const [editId, setEditId] = useState(null);

  return (
    // Main container with a nice white background and shadow
    <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl">
      {/* App title */}
      <h1 className="text-2xl font-bold text-center text-purple-600 mb-4">🌟 ToDo App</h1>
      {/* Form to add/edit todos */}
      <TodoForm todos={todos} setTodos={setTodos} editId={editId} setEditId={setEditId} />
      {/* List to show all todos */}
      <TodoList todos={todos} setTodos={setTodos} setEditId={setEditId} />
    </div>
  );
};

export default TodoApp;

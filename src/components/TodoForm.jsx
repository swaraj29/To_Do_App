import React, { useState } from "react";

// This component handles adding and editing todos
const TodoForm = ({ todos, setTodos, editId, setEditId }) => {
  // Keep track of what the user types in the input field
  const [input, setInput] = useState("");

  // Handle what happens when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    // Don't add empty todos
    if (!input.trim()) return;

    if (editId !== null) {
      // If we're editing an existing todo, update it
      const updated = todos.map((todo) =>
        todo.id === editId ? { ...todo, text: input } : todo
      );
      setTodos(updated);
      setEditId(null);
    } else {
      // If we're adding a new todo, create it with a unique ID
      const newTodo = { id: Date.now(), text: input };
      setTodos([...todos, newTodo]);
    }

    // Clear the input field after adding/editing
    setInput("");
  };

  return (
    // The form with input field and submit button
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      {/* Input field for typing todo text */}
      <input
        className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Button that changes text based on whether we're adding or editing */}
      <button
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        type="submit"
      >
        {editId !== null ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;

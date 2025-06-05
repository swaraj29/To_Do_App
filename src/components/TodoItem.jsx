import React from "react";

// This component shows a single todo item with edit and delete buttons
const TodoItem = ({ todo, todos, setTodos, setEditId }) => {
  // Function to delete this todo
  const handleDelete = () => {
    // Remove this todo from the list
    const filtered = todos.filter((t) => t.id !== todo.id);
    setTodos(filtered);
  };

  // Function to edit this todo
  const handleEdit = () => {
    // Tell the app we want to edit this todo
    setEditId(todo.id);
  };

  return (
    // Each todo item is a list item with the text and buttons
    <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
      {/* Show the todo text */}
      <span className="text-gray-800">{todo.text}</span>
      {/* Buttons to edit or delete the todo */}
      <div className="space-x-2">
        <button onClick={handleEdit} className="text-blue-500">Edit</button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

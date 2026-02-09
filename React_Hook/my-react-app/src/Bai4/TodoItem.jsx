import React from "react";

const TodoItem = React.memo(({ todo, onDelete, onToggle }) => {
  console.log("render item", todo.id);

  return (
    <div>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
});

export default TodoItem;

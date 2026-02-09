import { use, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormInfor from './Bai1/FormInfor';
import Lifecycle from './Bai2/Lifecycle';
import Product from './Bai3/Product';
import TodoInput from './Bai4/TodoInput';
import TodoList from './Bai4/TodoList';
import Stopwatch from './Bai5/Stopwatch';
import FetchUsers from './Bai6/FetchUsers';

function App() {
  const [todos, setTodos] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      title: `Todo ${i}`,
      completed: false,
    }))
  );

  const handleAdd = useCallback((title) => {
    setTodos((prev) => [ ...prev,{ id: Date.now(), title, completed: false,},]);
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  }, []);

  return (
    <div>
      {/* <h2>Todo App</h2>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle}/> */}
      {/* <Stopwatch/> */}
      <FetchUsers/>
    </div>
  );
}
export default App









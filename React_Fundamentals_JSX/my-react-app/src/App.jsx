import { useState } from 'react'
import './App.css'
import Header from './Bai1/components/Header';
import StudentInfo from './Bai1/components/StudentInfo';
import Footer from './Bai1/components/Footer';
import CounterApp from './Bai2/CounterApp';
import Forminfo from './Bai3/FormInfo';
import StatusBadge from './Bai4/components/StatusBadge';
import TodoInput from './Bai5/components/TodoInput';
import TodoList from './Bai5/components/TodoList';

function App() {
  const student = {
    name:"Truong Van Hiep",
    mssv: 23664511,
    lop:"DHKTPM19B"
  };

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const [status, setStatus] = useState("");
  return (
    <>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>


        {/* <Header/>
        <StudentInfo
        name= {student.name}
        mssv={student.mssv}
        lop={student.lop}/>
        <Footer/> */}
        {/* <Forminfo/> */}
        
      {/* <CounterApp/> */}


     {/* <button className='btn' onClick={()=> {setStatus("blue")}}>Online</button>
     <button className='btn' onClick={()=> {setStatus("gray")}}>Offline</button>
     <button className='btn' onClick={()=> {setStatus("red")}}>Busy</button>

     <StatusBadge status={status}/> */}
    </>
  )
}

export default App;



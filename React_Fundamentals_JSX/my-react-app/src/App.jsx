import { useState } from 'react'
import './App.css'
import Header from './Bai1/components/Header';
import StudentInfo from './Bai1/components/StudentInfo';
import Footer from './Bai1/components/Footer';
import CounterApp from './Bai2/CounterApp';
import Forminfo from './Bai3/FormInfo';
import StatusBadge from './Bai4/components/StatusBadge';

function App() {
  const student = {
    name:"Truong Van Hiep",
    mssv: 23664511,
    lop:"DHKTPM19B"
  };

  const [status, setStatus] = useState("");
  return (
    <>
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



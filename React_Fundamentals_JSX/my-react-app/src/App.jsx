import { useState } from 'react'
import './App.css'
import Header from './Bai1/components/Header';
import StudentInfo from './Bai1/components/StudentInfo';
import Footer from './Bai1/components/Footer';
import CounterApp from './Bai2/CounterApp';

function App() {
  const student = {
    name:"Truong Van Hiep",
    mssv: 23664511,
    lop:"DHKTPM19B"
  };


  return (
    <>
        {/* <Header/>
        <StudentInfo
        name= {student.name}
        mssv={student.mssv}
        lop={student.lop}/>
        <Footer/> */}
      <CounterApp/>

    </>
  )
}

export default App;



import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Display from './components/Display';

function App() {

  const [studentList, setStudentList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form studentList={studentList} setStudentList={setStudentList}/>
      <Display studentList={studentList}/>
    </div>
  );
}

export default App;

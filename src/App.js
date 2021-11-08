import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  // Making studentList array available for both Display and form
  const [studentList, setStudentList] = useState([]);

  return (
    <div className="App">
      <Header />
      {/* Below I've made studentList and the setter available in Form */}
      <Form studentList={studentList} setStudentList={setStudentList}/>
      {/* Display only gets the getter for studentList */}
      <Display studentList={studentList}/>
    </div>
  );
}

export default App;

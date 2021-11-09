import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  // Making studentList array available for both Display and form
  const [studentList, setStudentList] = useState([]);

  const [themeMode, setThemeMode] = useState({
    style: "Day",
    text: "Day Mode",
  })


  return (
    <div className={themeMode.style} style={{height:"100vh"}}>
      {/* Theme mode and set theme mode available to Header */}
      <Header themeMode={themeMode} setThemeMode={setThemeMode} />
      {/* Below I've made studentList and the setter available in Form */}
      <Form studentList={studentList} setStudentList={setStudentList}/>
      {/* Display only gets the getter for studentList */}
      <Display studentList={studentList} setStudentList={setStudentList}/>

    {/* By passing the themeMode.text down you can then access it and add it to the handler */}
      <p>{themeMode.text}</p>
    </div>
  );
}

export default App;

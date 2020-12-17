import './App.css';
import Form from "./form";
import React, { useState } from 'react';

const initialValues={
  name:"",
  password:"",
  email:"",
  eula: false
}
function App() {
  const [values, setValues]= useState(initialValues)

  function changeHandler(evt){
    if(evt.target.type==="checkbox"){
      setValues({...values, eula:!values.eula})
    }
    else{
    let name = evt.target.name;
    let value = evt.target.value;
    setValues({...values, [name]:value});
    }
  }

  function submit(evt){
    evt.preventDefault();
    
  }

  return (
    <div className="App">
      <Form submit={submit} changeHandler={changeHandler} values={values}/>
    </div>
  );
}

export default App;

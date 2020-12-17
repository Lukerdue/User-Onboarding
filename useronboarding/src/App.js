import './App.css';
import Form from "./form";
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import schema from './schema';
import axios from 'axios'

const initialValues={
  name:"",
  password:"",
  email:"",
  eula: false
}
const initialMessages={
  name:"",
  password:"",
  email:"",
  eula:"",
}
const initialDisabled=true
function App() {
  //-----------setting state-------------
  const [values, setValues]= useState(initialValues)
  const [errors, setErrors] = useState(initialMessages)
  const [disabled, setDisabled] = useState(initialDisabled)

  //------------------event handlers-----------------
  function changeHandler(evt){
    const name = evt.target.name
    let value = evt.target.value;
    //yup validation--
    yup.reach(schema, name)
      .validate(value)
      .then(()=>{
        setErrors({...errors, [name]:""})
      })
      .catch(err=>{
        console.log(err.errors)
        setErrors({...errors, [name]:err.errors[0] })
      })


      //actual change handling--
    if(evt.target.type==="checkbox"){
      setValues({...values, eula:!values.eula})
    }
    else{
    
    setValues({...values, [name]:value});
    }
  }//end of changeHandler function

  function submit(evt){
    evt.preventDefault();
    axios.post("https://reqres.in/api/users", values)
      .then(res=>{
        console.log(res)
      })
      .catch(drama=>{
        console.log(drama)
      })
    setValues(initialValues)
  }//end of submit

  //------------------use effects----------------------
  useEffect(()=>{
    schema.isValid(values).then(valid=>{
      setDisabled(!valid);
    })
  },[values])

  return (
    <div className="App">
      <Form 
        submit={submit} 
        changeHandler={changeHandler} 
        values={values} 
        errors={errors}
        disabled={disabled}/>
    </div>
  );
}

export default App;

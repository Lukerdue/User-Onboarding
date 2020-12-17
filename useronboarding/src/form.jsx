import React from 'react'
import axios from 'axios'

function Form (props){

return(
    <form>
        <input
        type="text"
        name="name"
        value={props.values.name}
        onChange={props.changeHandler}
        placeholder="Name"
        /><br/>
        <input
        type="password"
        name="password"
        value={props.value.password}
        onChange={props.changeHandler}
        placeholder="Password"
        /><br/>
        <input
        type="text"
        name="email"
        value={props.values.email}
        onChage={props.changeHandler}
        placeholder="example@sample.com"
        /><br/>
        <input
        type="checkbox"
        name="eula"
        /><br/><br/>
        <button onClick={proips.submit}>Submit!</button>
    </form>
)

}
export default Form
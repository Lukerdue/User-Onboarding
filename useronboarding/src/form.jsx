import React from 'react'

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
        value={props.values.password}
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
        <label>
        <input
        type="checkbox"
        name="eula"
        checked={props.values.eula}
        onChange={props.changeHandler}
        />User Agreement</label><br/><br/>
        <button onClick={props.submit}>Submit!</button>
    </form>
)

}
export default Form
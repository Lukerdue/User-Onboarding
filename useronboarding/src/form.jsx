import React from 'react'

function Form (props){

return(
    <div>
        <div className="errors">
            <p>{props.errors.name}</p>
            <p>{props.errors.password}</p>
            <p>{props.errors.email}</p>
            <p>{props.errors.eula}</p>
        </div>
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
        onChange={props.changeHandler}
        placeholder="example@sample.com"
        /><br/>
        <label>
        <input
        type="checkbox"
        name="eula"
        value={props.values.eula}
        onChange={props.changeHandler}
        />User Agreement</label><br/><br/>
        <button disabled={props.disabled} onClick={props.submit}>Submit!</button>
    </form>
    </div>
)

}
export default Form
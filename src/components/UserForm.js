import React, {useState} from 'react'

const UserForm = (props) => {  
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    

    const onChangeHandler = e => {
            setState({
                ...state,
                [e.target.name]: e.target.value,
            });
        }
        console.log(state)
    return(
        <form action="">
            <form-container>
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChangeHandler} type="text" name="firstName"/>
            </form-container>
            <form-container>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChangeHandler} type="text" name="lastName"/>
            </form-container>
            <form-container>
                <label htmlFor="email">Email</label>
                <input onChange={onChangeHandler} type="text" name="email"/>
            </form-container>
            <form-container>                 
                <label htmlFor="password">Password</label>
                <input onChange={onChangeHandler} type="password" name="password"/>
            </form-container>          
            <form-container>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChangeHandler} type="password" name="confirmPassword"/>
            </form-container>    
            <div className="error">
                {(state.firstName.length !==0 && state.firstName.length <2) && <p>First Name must be 2 Characters long</p>}
                {(state.lastName.length !== 0 && state.lastName.length < 2) && <p>Last Name must be 2 Characters long</p>}
                {(state.email.length !== 0 && state.email.length < 5) && <p>Email must be 5 Characters long</p>}
                {(state.password.length !== 0 && state.password.length < 8) && <p>Password must be 8 Characters long</p>}
                {(state.confirmPassword !== state.password) && <p>Confirm Password must match Password</p>}
            </div>     
        </form>
    )
}
export default UserForm;
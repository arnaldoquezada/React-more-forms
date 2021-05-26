import React from 'react';

const UserForm = (props) => {    
    return(
        <form action="">
            <form-container>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName"/>
            </form-container>
            <form-container>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="firstName"/>
            </form-container>
            <form-container>
                <label htmlFor="email">Email</label>
                <input type="text" name="email"/>
            </form-container>
            <form-container>                 
                <label htmlFor="firstName">Password</label>
                <input type="text" name="password"/>
            </form-container>          
            <form-container>
                <label htmlFor="firstName">Confirm Password</label>
                <input type="text" name="confirmPassword"/>
            </form-container>         
        </form>
    )
}
export default UserForm;
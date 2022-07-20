import React, { useContext } from 'react';
import { MyContext } from '../context/MyProvider';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);

    const handleSubmiteReg = (event) => {
        event.preventDefault();
        fetch('http://localhost:3306/api/registration', {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                first_name: context.user.first_name,
                last_name: context.user.last_name,
                email: context.user.email,
                password: context.user.password
            }),
        }).then((res) => {
            if (res.status === 201) {
               navigate('/log-in'); 
               context.setUser(context.userBlank);
            } else {
                console.log("There was an error registering a new user")
            }
        })
    };

    return (
        <div>
            <p>This is reg</p>
            <form onSubmit={handleSubmiteReg}>
                <input value={context.user.first_name} onChange={context.handleUserDetailsChange} name="first_name" placeholder='First Name'/>
                <input value={context.user.last_name} onChange={context.handleUserDetailsChange} name="last_name" placeholder='Last Name'/>
                <input value={context.user.email} onChange={context.handleUserDetailsChange} name="email" placeholder='email'/>
                <input value={context.user.password} onChange={context.handleUserDetailsChange} name="password" placeholder='password'/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default Registration;
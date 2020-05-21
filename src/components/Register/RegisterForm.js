import React from 'react';
import {NavLink} from 'react-router-dom';

export default function RegisterForm() {

    const handleEmail = (e) =>{
        e.preventDefault();
    }

    const handlePass = (e) =>{
        e.preventDefault();
    }

    const handlePassCheck = (e) =>{
        e.preventDefault();
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div >
            <form action='' method='post' className='register_form'>
                <label htmlFor='email'>Email</label>
                <input type='text' id='RegisterEmail' value='' onChange={handleEmail}/>
                <label htmlFor='RegisterPassword'>Hasło</label>
                <input type='password' id='RegisterPassword' value='' onChange={handlePass}/>
                <label htmlFor='RegisterPassCheck'>Powtórz Hasło</label>
                <input type='password' id='RegisterPassCheck' value='' onChange={handlePassCheck}/>
                <NavLink to='login' className='login__navigation-link'>Login</NavLink>
                <input type='submit' id='RegisterSubmit' value='Załóż konto' onClick={handleFormSubmit}/>  
            </form>
        </div>
    )
}

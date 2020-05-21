import React from 'react';
import {NavLink} from 'react-router-dom';
export default function LoginNav() {
    return (
        <>
            <NavLink to='login' className='login__navigation-link'>Login</NavLink>
            <NavLink to='register' className='login__navigation-link'>Register</NavLink>
        </>
    )
}

import React from 'react';
import {NavLink} from 'react-router-dom';
export default function LoginNav() {
    return (
        <>
            <NavLink to='login' className='link'>Login react router link</NavLink>
            <NavLink to='register' className='link'>Register react router link</NavLink>
        </>
    )
}

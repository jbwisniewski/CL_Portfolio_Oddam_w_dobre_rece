import React from 'react'

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

    return (
        <div >
            <form action='' method='post' className='register_form'>
                <label for='email'>Email</label>
                <input type='text' id='RegisterEmail' value='' onChange={handleEmail}/>
                <label for='RegisterPassword'>Hasło</label>
                <input type='password' id='RegisterPassword' value='' onChange={handlePass}/>
                <label for='RegisterPassCheck'>Powtórz Hasło</label>
                <input type='password' id='RegisterPassCheck' value='' onChange={handlePassCheck}/>
            </form>
        </div>
    )
}

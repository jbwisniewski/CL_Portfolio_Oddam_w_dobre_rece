import React from 'react';
import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom'

export default function PageNav() {
    return (
        <>
            <RouterLink to='/' className='page__navigation-link'>Start</RouterLink>
            <Link to='' className='page__navigation-link'>O co chodzi?</Link>
            <Link to='about' className='page__navigation-link'>O nas</Link>
            <Link to='organizations' className='page__navigation-link'>Fundacja i organizacje</Link>
            <Link to='contact' className='page__navigation-link'>Kontakt</Link>
        </>
    )
}

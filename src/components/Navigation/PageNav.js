import React from 'react';
import {Link} from 'react-scroll';

export default function PageNav() {
    return (
        <>
            <Link to='/' className='page__navigation-link'>Start</Link>
            <Link to='' className='page__navigation-link'>O co chodzi?</Link>
            <Link to='about' className='page__navigation-link'>O nas</Link>
            <Link to='organizations' className='page__navigation-link'>Fundacja i organizacje</Link>
            <Link to='contact' className='page__navigation-link'>Kontakt</Link>
        </>
    )
}

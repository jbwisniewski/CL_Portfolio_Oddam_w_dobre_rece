import React from 'react'
import {Link} from 'react-scroll'


export default function PageNav() {

    return (
        <div className='home__navigation-pagenav'>
            <ul className='home__navigation-pagenav-list'>
                <li className='home__navigation-pagenav-link'>
                    <Link to='top' contarinerid='top' activeClass="active" spy={true}>
                        Start
                    </Link>
                </li>
                <li className='home__navigation-pagenav-link'>
                    <Link to='foursteps' contarinerid='foursteps' activeClass="active" spy={true}>
                        O co chodzi?
                    </Link>
                </li>
                <li className='home__navigation-pagenav-link'>
                    <Link to='aboutus' contarinerid='aboutus' activeClass="active" spy={true}>
                        O nas
                    </Link>
                </li>
                <li className='home__navigation-pagenav-link'>
                    <Link to='whowehelp' contarinerid='whowehelp' activeClass="active" spy={true}>
                        Fundacje i organizacje
                    </Link>
                </li>
                <li className='home__navigation-pagenav-link'>
                    <Link to='contact' contarinerid='contact' activeClass="active" spy={true}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </div>
    )
}

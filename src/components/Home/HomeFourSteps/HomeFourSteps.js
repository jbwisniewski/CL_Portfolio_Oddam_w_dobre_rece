import React from 'react'

import decoUrl from '../../../assets/Decoration.svg'
import icon1Url from '../../../assets/Icon-1.svg'
import icon2Url from '../../../assets/Icon-2.svg'
import icon3Url from '../../../assets/Icon-3.svg'
import icon4Url from '../../../assets/Icon-4.svg'

import GiveAwayButton from '../Buttons/GiveAwayButton'

export default function HomeFourSteps() {
    return (
        <div className='main-container home__four' id='foursteps'>
            <h2 className='home__four-title'>
                Wystarczą 4 proste kroki
            </h2>
            <img src={decoUrl} alt='decoration'/>
            <div className='home__four-row'>
                <div className='home__four-row-1'>
                    <img src={icon1Url} alt='tshirt icon' />
                    <h3 className='home__four-row-title'>
                        Wybierz rzeczy
                    </h3>
                    <p className='home__four-row-text'>
                        ubrania, zabawki,
                        <br/>
                        sprzęt i inne
                    </p>
                </div>
                <div className='home__four-row-2'>
                    <img src={icon2Url} alt="shopping bag icon" />
                    <h3 className='home__four-row-title'>
                        Spakuj je
                    </h3>
                    <p className='home__four-row-text'>
                        skorzystaj z
                        <br/>
                        worków na śmieci
                    </p>
                </div>
                <div className='home__four-row-3'>
                   <img src={icon3Url} alt='magnifying glass icon'/>
                    <h3 className='home__four-row-title'>
                        Zdecyduj komu
                        <br/>
                        chcesz pomóc
                    </h3>
                    <p className='home__four-row-text'>
                        wybierz zaufane
                        <br/>
                        miejsce
                    </p>
                </div>
                <div className='home__four-row-4'>
                    <img src={icon4Url} alt='refresh icon'/>
                    <h3 className='home__four-row-title'>
                        Zamów kuriera
                    </h3>
                    <p className='home__four-row-text'>
                        kurier przyjedzie
                        <br/>
                        w dogodnym terminie
                    </p>
                </div>
            </div>
            <GiveAwayButton/>
        </div>
    )
}

import React from 'react'
import GiveAwayButton from '../Buttons/GiveAwayButton'
import OrganizeCollection from '../Buttons/OrganizeCollection'

export default function HeaderButtons() {
    return (
        <div className='home__header-buttons'>
            <GiveAwayButton/>
            <OrganizeCollection/>
        </div>
    )
}

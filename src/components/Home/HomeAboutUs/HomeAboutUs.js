import React from 'react'
import decoUrl from '../../../assets/Decoration.svg'
import signUrl from '../../../assets/Signature.svg'
import imgUrl from '../../../assets/People.jpg'

export default function HomeAboutUs() {
    return (
        <div className='main-container home__about' id='aboutus'>
            <div className='home__about-intro'>
                <h2 className='home__about-intro-title'>
                    O nas
                </h2>
                <img src={decoUrl} alt="decoration" className='home__about-intro-decoration'/>
                <p className='home_about-intro-text'>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={signUrl} alt='signature icon' className='signature'/>
            </div>
            <div className='home__about-img'>
                <img src={imgUrl} alt='people'/>
            </div>
        </div>
    )
}

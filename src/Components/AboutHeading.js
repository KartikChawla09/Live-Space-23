import React from 'react'
import "./AboutHeading.css"

const AboutHeading = () => {
    return (
        <div className='about-outer-box'>
            <div className='About-header-content'>
                <p className='About-text'>Our Story</p>
                <div className='About-header-text'>
                    <h1 className='About-heading-h1'>Learn About Our <div className='About-slash'> /</div></h1>
                    <h1 className='About-heading2-h1'>Vision and Values</h1>
                </div>
                <div className='About-image-placeholder'></div>
            </div>
        </div>
    )
}

export default AboutHeading
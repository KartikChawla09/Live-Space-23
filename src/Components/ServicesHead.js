import React from 'react'
import "./ServicesHead.css"

const ServicesHead = () => {
    return (
        <div className='services-main-box'>
            <div className='services-box-elements'>
                <div className='service-image-placeholder'>
                    <div className='service-image1'></div>
                    <div className='service-image2'></div>
                </div>
                <div className='service-text-box'>
                    <h1 className='service-text-line1'>Transform</h1>
                    <h1 className='service-text-line2'>Your Space</h1>
                    <h1 className='service-text-line3'>with Us</h1>
                </div>
            </div>
            <p className='service-bottom-text'>Architecture & Interior</p>
        </div>
    )
}

export default ServicesHead
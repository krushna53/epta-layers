import React from 'react'
import banner_image from "../images/banner-image.png";
import banner_des_image from '../images/logo-image.png';

const Banner = () => {
  return (
    <>
        <div className='banner-section'>
            <div className='banner-wrapper'>
                <div className='banner-container'>
                    <div className='banner-image'>
                        <img src={banner_image}/>
                    </div>
                    <div className='banner-des-folder'>
                        <div className='banner-des-image'>
                            <img src={banner_des_image}/>
                        </div>
                        <p>A SINGLE-POINT ENTERPRISE SOLUTIONS PROVIDER</p>
                        <h2>We work with IT world
                            leaders to deliver
                            tailor-made solutions.
                        </h2>
                        <div className='banner-btn'>
                            <a href='#'>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner

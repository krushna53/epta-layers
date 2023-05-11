import React, { useEffect } from 'react'
import banner_image from "../images/banner-image.png";
import banner_des_image from '../images/logo-image.png';
import banner_mobile_image from '../images/banner-mobile-image.jpg';
import Aos from 'aos';

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <>
        <div className='banner-section'>
            <div className='banner-wrapper'>
                <div className='banner-container'>
                    <div className='banner-image'>
                        <img src={banner_image}/>
                    </div>
                    <div className='banner-mobile-image'>
                        <img src={banner_mobile_image}/>
                    </div>
                    <div className='banner-des-folder'>
                        <div className='banner-des-image' data-aos="fade-down">
                            <img src={banner_des_image}/>
                        </div>
                        <p data-aos="fade-down">A SINGLE-POINT ENTERPRISE SOLUTIONS PROVIDER</p>
                        <h2 data-aos="fade-down">We work with IT world
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

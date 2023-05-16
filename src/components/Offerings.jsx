import React, { useEffect } from 'react'
import leftImage from '../images/4new.jpg'
import model from '../images/OSI Model new.png'
import Aos from 'aos';
const Offerings = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <section className='offerings'>
            <div className='d-flex'>
                <div className='left'>
                    <div className='img' data-aos="zoom-in">
                        <img src={leftImage} alt="left" />
                    </div>
                </div>
                <div className='right' data-aos="fade-up">
                    <div className='dec'>
                        <p>
                            Epta stands for 'seven' in Greek. It encapsulates our vision to focus on the 7 layers of networking in the OSI model. Our service framework allows us to understand your needs based on your line of business before designing a customized networking solution. We focus on the problem areas without losing sight of the business KPIs.
                        </p>
                    </div>
                    <div className='img'>
                        <img src={model} alt="model" />
                        <p>Open Systems interconnection (OSI) model</p>
                    </div>
                    <div className='btn'>
                        <button> <a href='#offerings'>See our Offerings</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offerings
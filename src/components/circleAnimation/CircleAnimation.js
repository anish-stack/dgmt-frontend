import React from 'react'
import './circleAnimation.css'
import html from '../../icons/html.png'
import css from '../../icons/css-3.png'
import js from '../../icons/js.png'
import node from '../../icons/nodejs.png'
import react from '../../icons/react.png'
import express from '../../icons/express.jpeg'
import ecommerce from '../../icons/eccomerce.png'
import wordpress from '../../icons/wordpress.png'
import seo from '../../icons/seo.png'
import socialMedia from '../../icons/social-media.png'

const CircleAnimation = () => {
    return (
        <>
            <section className='circle-animation'>
                <div className='container'>
                    <div className='left'>
                        <h2 data-aos="fade-right" data-aos-duration='1500' >Creative Digital Marketing Company</h2>
                        <div className='left-content' data-aos="zoom-in" data-aos-duration='1500'>
                        <p>At DGMT, we excel in various domains</p>
                        <p>DGMT excels in HTML, CSS, JavaScript, React, and e-commerce development for tailored, top-tier website solutions.</p>
                        <p>Our proficiency spans HTML, CSS, JavaScript, React, and encompasses specialized skills in crafting robust e-commerce solutions.</p>
                        <p>We are dedicated to delivering top-notch services that cater to the unique needs of our clients in the ever-evolving digital landscape.</p>
                        </div>
                    </div>
                    <div className='right' data-aos="fade-down-left" data-aos-duration='1500'>
                        <div className='circle-1'>
                            <img loading="lazy" src={html} alt='img' className='img-1' />
                            <img loading="lazy" src={css} alt='img' className='img-2' />
                            <img loading="lazy" src={js} alt='img' className='img-3' />
                            <img loading="lazy" src={node} alt='img' className='img-4' />
                            <img loading="lazy" src={react} alt='img' className='img-5' />
                            <img loading="lazy" src={express} alt='img' className='img-6' />
                        </div>
                        <div className='circle-2'></div>
                        <div className='circle-3'>
                            <img loading="lazy" src={ecommerce} alt='img' className='img-7' />
                            <img loading="lazy" src={wordpress} alt='img' className='img-8' />
                            <img loading="lazy" src={seo} alt='img' className='img-9' />
                            <img loading="lazy" src={socialMedia} alt='img' className='img-10' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CircleAnimation

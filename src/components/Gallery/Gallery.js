import React from 'react';
import img from './certificate.jpeg';
import img1 from './mainimg.jpeg';
import video from './Dgmt Real Mews.mp4';
import './gallery.css';
import GalleryAnimations from '../bigAimation/GalleryAnimation';

const Gallery = () => {
  return (
    <>
           <marquee behavior="scroll" direction="left" scrollamount="20" className="marquess">ATTAL SAMAN SAMHAROH 2023</marquee>

    <div className='gallery-container'>
      <div className='image-gallery'>
        <img loading="lazy" src={img} alt='Certificate' />
        <img loading="lazy" src={img1} alt='Main Image' />
        {/* Add more images as needed */}
      </div>
      <div className='video-gallery'>
        <video controls>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </>

  );
};

export default Gallery;

import React from 'react';
import { SubHeading } from '../../components';
import { images , data } from '../../constants';

const FindUs = () => (
  <div className='app_bg app_wrapper section_padding' id="contact">
<div className='app_wrapper_info'>

  <SubHeading title="Host Your Event"/>
  <h1 className='headtext_cormorant' style={{marginBottom:'3rem'}}>A Warm & Friendly Atmosphere</h1>
  

  <div className='app_wrapper-content'>
    <p className='p_opensans'>Allow us to make your next special event extra special. We cater for all sized functions, ideal for your intimate gathering, our team can curate a menu to suit your taste.</p>
    <p className='p_cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
    <p className='p_opensans'>Mon - Fri: 10:00 am - 02:00 am</p>

    <p className='p_opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
  
  </div>

  <button  className='custom_button' style={{marginTop:'2rem'}}>View More</button>
  </div>  
  <div className='app_wrapper_img'>
    <img src={images.findus}/>
  </div>  
  </div>
);

export default FindUs;

import React from 'react';

import {images} from '../../constants';

const SubHeading = ({title}) => (
  <div style={{marginBottom:'1 rem'}}>
    <p className='p_cormorant'>{title}</p>
   <img src={images.spoon} alt="spoon" className='spoon_image'/>
   
  </div>
);

export default SubHeading;

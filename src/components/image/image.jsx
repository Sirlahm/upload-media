import React from 'react';

import './image.css';

const image = props => (
   
  <div
    className="image"
    style={{
      backgroundImage: `url('${props.imageUrl}')`,
      backgroundSize:  'cover',
      backgroundPosition:  'center'
    }}
  />
);

export default image;
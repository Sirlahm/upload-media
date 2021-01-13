import React from 'react';



const image = props => (
   
  <div
    className='w-3/8 h-20 bg-no-repeat'
    style={{
      backgroundImage: `url('${props.imageUrl}')`,
      backgroundSize:  'cover',
      backgroundPosition:  'center'
    }}
  />
);

export default image;
import React from 'react'
 import Input from '../input/input'
 import Button from '../button/button'
import './box.css'
const Box = () => {


    return(
   <div className='box'>
       <div className='box-head'>
       <p className='box-head-p'>Upload Media</p>
       </div>
       
       <p className='box-details'>Add up to 6 high quality images, GIFs and videos to make this product more appealing to customers.</p>
       <Input/>

       <div className='btn-box'>
           <Button>Cancel</Button>
           <Button>Save</Button>
       </div>
   </div>
    )
}

export default Box
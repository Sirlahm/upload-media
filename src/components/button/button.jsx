import React from 'react'

import './button.css'

const Button =(props) => (

<button className={`${props.children==='Save'?'btn-green':'btn-cancel'} btn`}>{props.children}</button>

)

export default Button
import React from 'react'
import './Input.css'

type Props = {
  size: string,
  placeholder: string,  
}

function Input (props: Props) {
  const { size = 'medium', ...rest } = props
  return (
    <input className={`input ${size}`} {...rest} />
  )
}

export default Input
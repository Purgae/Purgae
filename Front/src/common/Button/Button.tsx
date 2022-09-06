import React from 'react'
import './Button.css'

interface Props {
  variant: string;
  children: any;
}

const Button = (props: Props) => {
  const {variant= "primary", children, ...rest} = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button

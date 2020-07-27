import React from 'react'
import styles from './button.module.scss'

const Button = ({ type, children, onClick, ...rest }) => (
  
  <button type={type} onClick={onClick} className={styles.button} {...rest}>
    {children}
  </button>
)
export default Button

import React from 'react'
import styles from './button.module.scss'

const Button = ({ type, children, onClick }) => (
  <button type={type} onClick={onClick} className={styles.Button}>
    {children}
  </button>
)
export default Button

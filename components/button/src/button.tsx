import React from 'react'
import * as styles from './button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const {children, ...rest} = props
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}

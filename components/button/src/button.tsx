import React, {ComponentPropsWithoutRef} from 'react'
import * as styles from './button.module.css'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: ButtonProps) => {
  const {variant, children, ...rest} = props
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  )
}

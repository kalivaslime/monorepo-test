import React, {ComponentPropsWithoutRef} from 'react'
import * as styles from './button.module.css'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: ButtonProps) => {
  const {variant = 'primary', children, ...rest} = props
  return (
    <button
      className={clsx(
        styles.btn,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

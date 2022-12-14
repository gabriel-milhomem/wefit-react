import { ReactNode, ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  width?: number | string
}

export function Button({ width = '100%', children, ...rest }: ButtonProps) {
  return (
    <StyledButton type="button" width={width} {...rest}>
      {children}
    </StyledButton>
  )
}

import { ReactNode, ReactElement, ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactElement
  width?: string
  fontSize?: string
}

export function Button({
  width = '100%',
  fontSize = '1.2rem',
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton type="button" width={width} fontSize={fontSize} {...rest}>
      {children}
    </StyledButton>
  )
}

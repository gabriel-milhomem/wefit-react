import styled from 'styled-components'

interface StyledButtonProps {
  width: number | string
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.blue};
  font-size: 1.2rem;
  color: ${(props) => props.theme.white};
  border-radius: 4px;
  padding: 0 1.6rem;
  height: 4rem;
  text-transform: uppercase;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
  margin-bottom: 4.4rem;
  @media (max-width: 500px) {
    margin-bottom: 2rem;
  }
`

export const Brand = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.white};
  &:hover {
    filter: brightness(0.9);
  }
  transition: filter 0.2s;
`

export const MyCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  transition: filter 0.2s;
`

export const MyCartText = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.white};
  @media (max-width: 500px) {
    display: none;
  }
`

export const ItemCounter = styled.p`
  font-size: 1.2rem;
  text-align: right;
  color: ${(props) => props.theme.grey};
  line-height: 1.92rem;
  font-weight: 600;
`

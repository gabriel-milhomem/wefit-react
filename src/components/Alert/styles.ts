import styled, { css } from 'styled-components'
import { AlertProps } from '..'

type FigureProps = AlertProps

export const AlertContainer = styled.section`
  max-width: 100%;
  width: calc(100vw - 32px);
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 6.4rem 0;
  gap: 3.6rem;
`

export const Figure = styled.figure<FigureProps>`
  margin: 0 auto;
  ${(props) =>
    props.alertType === 'empty'
      ? css`
          width: 17.8rem;
          height: 26.4rem;
          position: relative;
          left: 1rem;
        `
      : css`
          width: 29.5rem;
          height: 30.7rem;
        `}
`

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 2.7rem;
  text-align: center;
  @media (max-width: 30em) {
    width: 200px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
`

export const Divider = styled.div`
  min-width: 44.7rem;
  width: 100%;
  height: 1.3px;
  background-color: ${(props) => props.theme.background};
`

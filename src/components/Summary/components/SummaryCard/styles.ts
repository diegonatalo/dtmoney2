import styled, { css } from 'styled-components'

interface SummaryCardConatinerProps {
  variant?: 'green' | 'red'
}

export const SummaryCardContainer = styled.div<SummaryCardConatinerProps>`
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green'
      ? css`
          background: ${props.theme['green-700']};
        `
      : props.variant === 'red'
      ? css`
          background: ${props.theme['red-700']};
        `
      : css`
          background: ${(props) => props.theme['gray-600']};
        `}
`

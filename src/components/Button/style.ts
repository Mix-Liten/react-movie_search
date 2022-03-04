import styled from 'styled-components'

interface LoadingItemProps {
  delay: number
}

export const S = {
  Button: styled.button`
    width: 200px;
    height: 50px;
    cursor: pointer;
    background-color: #ffffff;
    border: 2px solid #000000;
    border-bottom: 5px solid #000000;
    font-family: 'Futura';
    font-size: 1.2em;
    color: #000000;
    letter-spacing: 1px;
    transition: 1s;
    &:hover {
      background-color: #c1f6de;
    }
  `,
  Loading: styled.div`
    position: relative;
    -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
    span {
      position: relative;
      display: inline-block;
      color: #333;
      font-size: 1.2rem;
      text-transform: uppercase;
      animation: jump 1s ease-in-out infinite;
    }
    @keyframes jump {
      0% {
        transform: translateY(0px);
      }
      20% {
        transform: translateY(-5px);
      }
      40%,
      100% {
        transform: translateY(0px);
      }
    }
  `,
  LoadingItem: styled.span<LoadingItemProps>`
    animation-delay: ${props => `calc(0.1s * ${props.delay})`} !important;
  `,
}

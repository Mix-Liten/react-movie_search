import { FC, useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
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
`

const StyledLoading = styled.div`
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
`

interface LoadingItemProps {
  delay: number
}

const StyledLoadingItem = styled.span<LoadingItemProps>`
  animation-delay: ${props => `calc(0.1s * ${props.delay})`} !important;
`

const Loading = () => {
  return (
    <StyledLoading>
      <StyledLoadingItem delay={1}>L</StyledLoadingItem>
      <StyledLoadingItem delay={2}>o</StyledLoadingItem>
      <StyledLoadingItem delay={3}>a</StyledLoadingItem>
      <StyledLoadingItem delay={4}>d</StyledLoadingItem>
      <StyledLoadingItem delay={5}>i</StyledLoadingItem>
      <StyledLoadingItem delay={6}>n</StyledLoadingItem>
      <StyledLoadingItem delay={7}>g</StyledLoadingItem>
      <StyledLoadingItem delay={8}>.</StyledLoadingItem>
      <StyledLoadingItem delay={9}>.</StyledLoadingItem>
      <StyledLoadingItem delay={10}>.</StyledLoadingItem>
    </StyledLoading>
  )
}

interface ButtonProps {
  title: string
  onClick(): Promise<void>
}

const Card: FC<ButtonProps> = ({ title, onClick }) => {
  const [isLoading, setIsLoading] = useState(false)
  const onClickAction = async () => {
    if (isLoading) {
      console.log(1)
      return
    }
    console.log(2)
    setIsLoading(true)
    await onClick()
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500))
    setIsLoading(false)
  }
  return (
    <StyledButton type="button" onClick={onClickAction}>
      {isLoading ? <Loading /> : <>{title}</>}
    </StyledButton>
  )
}

export default Card

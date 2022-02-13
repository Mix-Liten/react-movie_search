import { FC } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  padding: 4px;
  border-radius: 4px;
  transition: box-shadow 0.4s;
  box-shadow: inset 0 22px 56px -36px rgba(255, 255, 255, 0.5), inset 0 4px 5px -4px rgba(255, 255, 255, 1),
    inset 0 -31px 34px -32px rgba(96, 68, 144, 0.3), inset 0 39px 50px -34px rgba(202, 172, 255, 0.3),
    inset 0 2px 9px rgba(154, 146, 210, 0.3), inset 0 1px 10px rgba(227, 222, 255, 0.2);
  &:hover {
    box-shadow: inset 0 19px 28px -18px rgba(255, 255, 255, 0.5), inset 0 4px 6px -3px rgba(255, 255, 255, 1),
      inset 0 -51px 44px -42px rgba(96, 68, 144, 0.3), inset 0 59px 60px -32px rgba(202, 172, 255, 0.3),
      inset 0 4px 16px rgba(154, 146, 210, 0.3), inset 0 2px 25px rgba(227, 222, 255, 0.23);
  }

  img {
    width: 300px;
    height: 450px;
    object-fit: cover;
  }

  p {
    margin: 0px;
    text-align: center;
    width: 300px;
    padding: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    box-sizing: border-box;
  }
`

interface CardProps {
  imgSrc: string
  title: string
  alt: string
}

const Card: FC<CardProps> = ({ imgSrc, title, alt }) => {
  return (
    <StyledCard>
      <img src={imgSrc} alt={alt} title={title} />
      <p title={title}>{title}</p>
    </StyledCard>
  )
}

export default Card

import { FC } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  line-height: 40px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <Title>{title}</Title>
    </header>
  )
}

export default Header

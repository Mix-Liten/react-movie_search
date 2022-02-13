import { FC } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <Title>{title}</Title>
}

export default Header

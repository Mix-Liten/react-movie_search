import { FC } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
`

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <Title>{title}</Title>
}

export default Header

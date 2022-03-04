import { FC } from 'react'
import { S } from './style'

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <S.Title>{title}</S.Title>
    </header>
  )
}

export default Header

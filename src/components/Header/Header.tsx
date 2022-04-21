import { S } from './style'

interface HeaderProps {
  title: string
}

const Header = (props: HeaderProps) => {
  const { title } = props
  return (
    <header>
      <S.Title>{title}</S.Title>
    </header>
  )
}

export default Header

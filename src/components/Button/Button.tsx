import { useState } from 'react'
import Loading from './Loading'
import { S } from './style'

interface ButtonProps {
  title: string
  onClick(): Promise<void>
}

const Button = (props: ButtonProps) => {
  const { title, onClick } = props
  const [isLoading, setIsLoading] = useState(false)
  const onClickAction = async () => {
    if (isLoading) return
    setIsLoading(true)
    await onClick()
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500))
    setIsLoading(false)
  }
  return (
    <S.Button type="button" onClick={onClickAction}>
      {isLoading ? <Loading /> : <>{title}</>}
    </S.Button>
  )
}

export default Button

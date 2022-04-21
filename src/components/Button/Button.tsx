import { useState } from 'react'
import Loading from './Loading'
import { S } from './style'
import { delay } from '../../helper'

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
    await delay(() => setIsLoading(false), 500)
  }
  return (
    <S.Button type="button" onClick={onClickAction}>
      {isLoading ? <Loading /> : <>{title}</>}
    </S.Button>
  )
}

export default Button

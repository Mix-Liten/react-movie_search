import { ReactNode } from 'react'
import { S } from './style'

export interface CardWrapperProps {
  baseURL?: string
  id?: string
  children?: ReactNode
}

const CardWrapper = (props: CardWrapperProps) => {
  const { baseURL, id, children } = props
  if (baseURL && id) {
    return (
      <S.LinkWrapper href={`${baseURL}${id}`} target="_blank" rel="noopener noreferrer" data-testid="card-wrapper">
        {children}
      </S.LinkWrapper>
    )
  }
  return <>{children}</>
}

export default CardWrapper

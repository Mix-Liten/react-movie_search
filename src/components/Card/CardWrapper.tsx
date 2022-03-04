import { FC, ReactNode } from 'react'
import { S } from './style'

export interface CardWrapperProps {
  baseURL?: string
  id?: string
  children?: ReactNode
}

const CardWrapper: FC<CardWrapperProps> = ({ baseURL, id, children }) => {
  if (baseURL && id) {
    return (
      <S.LinkWrapper href={`${baseURL}${id}`} target="_blank" rel="noopener noreferrer">
        {children}
      </S.LinkWrapper>
    )
  }
  return <>{children}</>
}

export default CardWrapper

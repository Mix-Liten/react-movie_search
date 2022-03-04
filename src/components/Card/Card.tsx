import { FC } from 'react'
import CardWrapper, { CardWrapperProps } from './CardWrapper'
import { S } from './style'

interface CardProps extends CardWrapperProps {
  imgSrc: string
  title: string
  alt: string
}

const Card: FC<CardProps> = ({ imgSrc, title, alt, ...props }) => {
  return (
    <CardWrapper {...props}>
      <S.Card>
        {!imgSrc || imgSrc === 'N/A' ? (
          <img src={`https://dummyimage.com/300x450/706c70/f5f5fa&text=${title}`} alt={alt} title={title} />
        ) : (
          <img src={imgSrc} alt={alt} title={title} />
        )}
        <p title={title}>{title}</p>
      </S.Card>
    </CardWrapper>
  )
}

export default Card

import CardWrapper, { CardWrapperProps } from './CardWrapper'
import { S } from './style'

interface CardProps extends CardWrapperProps {
  imgSrc: string
  title: string
  alt: string
}

const Card = (props: CardProps) => {
  const { imgSrc, title, alt, ...wrapperProps } = props
  return (
    <CardWrapper {...wrapperProps}>
      <S.Card>
        {!imgSrc || imgSrc === 'N/A' ? (
          <img
            src={`https://dummyimage.com/300x450/706c70/f5f5fa&text=${title}`}
            alt={alt}
            title={title}
            loading="lazy"
          />
        ) : (
          <img src={imgSrc} alt={alt} title={title} loading="lazy" />
        )}
        <p title={title}>{title}</p>
      </S.Card>
    </CardWrapper>
  )
}

export default Card

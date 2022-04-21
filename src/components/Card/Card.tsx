import CardWrapper, { CardWrapperProps } from './CardWrapper'
import { S } from './style'
import { PLACEHOLDER_IMAGE_URL } from '../../constant'

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
          <img src={`${PLACEHOLDER_IMAGE_URL}${title}`} alt={alt ?? title} title={title} loading="lazy" />
        ) : (
          <img src={imgSrc} alt={alt} title={title} loading="lazy" />
        )}
        <p title={title}>{title}</p>
      </S.Card>
    </CardWrapper>
  )
}

export default Card

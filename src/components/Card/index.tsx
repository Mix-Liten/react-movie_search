import { FC } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  img {
    width: 300px;
    height: 450px;
    object-fit: cover;
  }

  p {
    margin: 0px;
    text-align: center;
    width: 300px;
  }
`

const Card: FC<any> = () => {
  return (
    <StyledCard>
      <img src={`https://dummyimage.com/300x450/706c70/f5f5fa&text=Movie+Poster`} alt={`movie  poster`} />
      <p>{`dummy title`}</p>
    </StyledCard>
  )
}

export default Card

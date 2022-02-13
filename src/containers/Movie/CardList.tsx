import { FC } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import { MovieDetail } from './API'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 8px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface CardListProps {
  movieList: MovieDetail[]
}

const CardList: FC<CardListProps> = ({ movieList }) => {
  return (
    <Grid>
      {movieList.map((movie, i) => (
        <Item key={i}>
          <Card imgSrc={movie.Poster} title={movie.Title} alt={movie.Title} />
        </Item>
      ))}
    </Grid>
  )
}

export default CardList

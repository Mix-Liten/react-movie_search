import { FC } from 'react'
import Card from '../../components/Card'
import { MovieDetail } from './API'
import { S } from './style'

interface CardListProps {
  movieList: MovieDetail[]
}

const CardList: FC<CardListProps> = ({ movieList }) => {
  return (
    <S.Grid data-testid="card-list">
      {movieList.map((movie, i) => (
        <S.GridItem key={i}>
          <Card
            imgSrc={movie.Poster}
            title={movie.Title}
            alt={movie.Title}
            baseURL={'https://www.imdb.com/title/'}
            id={movie.imdbID}
          />
        </S.GridItem>
      ))}
    </S.Grid>
  )
}

export default CardList

import Card from '../../components/Card'
import { MovieDetail } from './API'
import { S } from './style'
import { IMDB_MOVIE_URL } from '../../constant'

interface CardListProps {
  movieList: MovieDetail[]
}

const CardList = (props: CardListProps) => {
  const { movieList } = props
  return (
    <S.Grid data-testid="card-list">
      {movieList.map((movie, i) => (
        <S.GridItem key={i}>
          <Card
            imgSrc={movie.Poster}
            title={movie.Title}
            baseURL={IMDB_MOVIE_URL}
            id={movie.imdbID}
          />
        </S.GridItem>
      ))}
    </S.Grid>
  )
}

export default CardList

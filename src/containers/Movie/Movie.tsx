import { useState, useCallback } from 'react'
import styled from 'styled-components'
import CardList from './CardList'
import SearchForm from './SearchForm'
import { MovieDetail } from './API'

const Container = styled.div`
  text-align: center;
  width: max(1000px, 80%);
  min-height: calc(100vh - 35px - 40px);
  margin: 20px auto;
  @media (max-width: 1000px) {
    width: max(600px, 80%);
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`

const Movie = () => {
  const [movieList, setMovieList] = useState<MovieDetail[]>([])

  const updateMovieList = useCallback((data: MovieDetail[]) => {
    setMovieList(data)
  }, [])

  return (
    <Container>
      <SearchForm updateMovieList={updateMovieList} />
      {!!movieList.length && <CardList movieList={movieList} />}
    </Container>
  )
}

export default Movie

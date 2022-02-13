import { useState, FormEvent } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import CardList from './CardList'
import { fetchMovieList, MovieDetail } from './API'

const Container = styled.div`
  text-align: center;
  width: max(1000px, 80%);
  margin: auto;
  @media (max-width: 1000px) {
    width: max(600px, 80%);
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`

const Form = styled.form`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 16px;
`

const FormLabel = styled.label`
  input {
    margin-right: 8px;
    margin-left: 8px;
  }
`

const Movie = () => {
  const [movieList, setMovieList] = useState<MovieDetail[]>([])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      movieName: { value: string }
    }
    const movieName = target.movieName.value
    const movies = await fetchMovieList(movieName)
    target.movieName.value = ''
    if (movies.length) setMovieList(movies)
  }

  return (
    <Container>
      <Header title="React Movie Search" />
      <Form onSubmit={onSubmit}>
        <FormLabel>
          Name:
          <input type="text" name="movieName" autoComplete="off" placeholder="Star Wars..." />
        </FormLabel>
        <button type="submit">Submit</button>
      </Form>
      {movieList && <CardList movieList={movieList} />}
    </Container>
  )
}

export default Movie

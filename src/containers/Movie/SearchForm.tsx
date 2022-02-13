import { FC, FormEvent, memo } from 'react'
import styled from 'styled-components'
import { fetchMovieList, MovieDetail } from './API'

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

interface SearchFormProps {
  updateMovieList(data: MovieDetail[]): void
}

const SearchForm: FC<SearchFormProps> = ({ updateMovieList }) => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      movieName: { value: string }
    }
    const movieName = target.movieName.value
    const movies = await fetchMovieList(movieName)
    target.movieName.value = ''
    if (movies?.length) updateMovieList(movies)
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormLabel>
        Name:
        <input type="text" name="movieName" autoComplete="off" placeholder="Star Wars..." />
      </FormLabel>
      <button type="submit">Submit</button>
    </Form>
  )
}

export default memo(SearchForm)

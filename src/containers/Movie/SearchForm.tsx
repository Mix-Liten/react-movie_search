import { FC, FormEvent, memo, useState, useRef } from 'react'
import styled from 'styled-components'
import { fetchMovieList, MovieDetail } from './API'
import AutoCompleteInput from './AutoCompleteInput'
import LoadingGif from '../../assets/loading.gif'

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

const Loading = styled.div`
  width: 22px;
  height: 22px;
  top: 0;
  right: 0;
  img {
    width: 100%;
  }
`

interface SearchFormProps {
  updateMovieList(data: MovieDetail[]): void
}

const SearchForm: FC<SearchFormProps> = ({ updateMovieList }) => {
  const lastSearchText = useRef('')
  const [isLoading, setIsLoading] = useState(false)
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      movieName: { value: string }
    }
    const nameVal = target.movieName.value.trim()
    if (!nameVal) return
    await onSearch(nameVal)
  }
  const onSearch = async (searchText: string) => {
    if (lastSearchText.current === searchText) return
    setIsLoading(true)
    lastSearchText.current = searchText
    const movies = await fetchMovieList(searchText)
    if (movies?.length) updateMovieList(movies)
    await new Promise<void>(resolve => setTimeout(() => resolve(), 1000))
    setIsLoading(false)
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormLabel>
        Name:
        <AutoCompleteInput name="movieName" placeholderText="Star Wars..." onSearch={onSearch} />
      </FormLabel>
      <Loading>{isLoading && <img src={LoadingGif} alt="loading..." />}</Loading>
      <button type="submit">Submit</button>
    </Form>
  )
}

export default memo(SearchForm)

import { FC, FormEvent, memo, useState, MutableRefObject } from 'react'
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
  updateMovieList(data: MovieDetail[], totalNum: number): void
  lastSearchText: MutableRefObject<string>
}

const SearchForm: FC<SearchFormProps> = ({ updateMovieList, lastSearchText }) => {
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
    if (searchText.length < 4) {
      alert('Please type over than 3 characters!')
      return
    }
    setIsLoading(true)
    lastSearchText.current = searchText
    const [movies, totalNum] = await fetchMovieList(searchText)
    if (movies?.length) updateMovieList(movies, parseInt(totalNum))
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

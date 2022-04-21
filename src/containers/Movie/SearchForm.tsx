import { FormEvent, memo, useState, MutableRefObject } from 'react'
import { fetchMovieList, MovieDetail } from './API'
import AutoCompleteInput from './AutoCompleteInput'
import LoadingGif from '../../assets/loading.gif'
import { S } from './style'
import { delay } from '../../helper'

interface SearchFormProps {
  updateMovieList(data: MovieDetail[], totalNum: number): void
  lastSearchText: MutableRefObject<string>
}

const SearchForm = (props: SearchFormProps) => {
  const { updateMovieList, lastSearchText } = props
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
    if (searchText.length < 3) {
      alert('Please type at least 3 characters!')
      return
    }
    setIsLoading(true)
    lastSearchText.current = searchText
    const [movies, totalNum] = await fetchMovieList(searchText)
    if (movies?.length) updateMovieList(movies, parseInt(totalNum))
    await delay(() => setIsLoading(false), 1000)
  }
  return (
    <S.Form onSubmit={onSubmit}>
      <S.FormLabel>
        Name:
        <AutoCompleteInput name="movieName" placeholderText="Star Wars..." onSearch={onSearch} />
      </S.FormLabel>
      <S.Loading>{isLoading && <img src={LoadingGif} alt="loading..." />}</S.Loading>
      <button type="submit">Submit</button>
    </S.Form>
  )
}

export default memo(SearchForm)

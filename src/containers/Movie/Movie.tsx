import { useState, useCallback, useRef, useEffect } from 'react'
import CardList from './CardList'
import SearchForm from './SearchForm'
import Button from '../../components/Button'
import { fetchMovieList, MovieDetail } from './API'
import { S } from './style'

const Movie = () => {
  const [movieList, setMovieList] = useState<MovieDetail[]>([])
  const [nextPageIndex, setnextPageIndex] = useState(0)
  const lastSearchText = useRef('')
  const [totalResultNum, setTotalResultNum] = useState(0)

  useEffect(() => {
    if (!movieList.length) return
    if (movieList.length / 10 >= 1) {
      setnextPageIndex(Math.ceil(movieList.length / 10 + 1))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieList])

  useEffect(() => {
    if ((nextPageIndex - 1) * 10 > totalResultNum) {
      setnextPageIndex(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPageIndex])

  useEffect(() => {
    setnextPageIndex(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastSearchText.current])

  const updateMovieList = useCallback((data: MovieDetail[], totalNum: number) => {
    if (!totalResultNum) setTotalResultNum(totalNum || 0)
    setMovieList(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClick = async (): Promise<void> => {
    const [movies] = await fetchMovieList(lastSearchText.current, nextPageIndex)
    if (movies?.length) setMovieList(ml => [...ml, ...movies])
  }

  return (
    <S.Container>
      <SearchForm updateMovieList={updateMovieList} lastSearchText={lastSearchText} />
      {!!movieList.length && <CardList movieList={movieList} />}
      {!!nextPageIndex && <Button title={'More'} onClick={onClick} />}
    </S.Container>
  )
}

export default Movie

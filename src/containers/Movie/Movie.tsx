import { useState, useCallback, useRef, useEffect } from 'react'
import styled from 'styled-components'
import CardList from './CardList'
import SearchForm from './SearchForm'
import { fetchMovieList, MovieDetail } from './API'

const Container = styled.div`
  text-align: center;
  width: max(1000px, 80%);
  min-height: calc(100vh - 35px - 40px - 42px);
  margin: 20px auto;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    width: max(600px, 80%);
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`

const MoreBtn = styled.button`
  width: 200px;
  height: 50px;
  cursor: pointer;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-bottom: 5px solid #000000;
  font-family: 'Futura';
  font-size: 1.2em;
  color: #000000;
  letter-spacing: 1px;
  margin-top: 15px;
  transition: 1s;
  &:hover {
    background-color: #c1f6de;
  }
`

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
    <Container>
      <SearchForm updateMovieList={updateMovieList} lastSearchText={lastSearchText} />
      {!!movieList.length && <CardList movieList={movieList} />}
      {!!nextPageIndex && (
        <MoreBtn type="button" onClick={onClick}>
          More
        </MoreBtn>
      )}
    </Container>
  )
}

export default Movie

import { render, screen } from '@testing-library/react'
import CardList from '../CardList'
import { MovieDetail } from '../API'
import mockData from '../../../__mockData__/data.json'

const movieList: MovieDetail[] = [mockData['Search'][0]]

describe('containers/Movie/CardList', () => {
  it('should render card list', () => {
    render(<CardList movieList={[]} />)
    const listElement = screen.getByTestId('card-list')
    expect(listElement).toBeInTheDocument()
  })

  it('should render correct length of movie list data', () => {
    render(<CardList movieList={movieList} />)
    const listElement = screen.getByTestId('card-list')
    expect(listElement.childElementCount).toBe(1)
  })
})

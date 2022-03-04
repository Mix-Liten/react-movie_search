import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import CardList from '../CardList'
import { MovieDetail } from '../API'

beforeEach(cleanup)

const mockData: MovieDetail[] = [
  {
    Title: 'Harry Potter and the Deathly Hallows: Part 2',
    Year: '2011',
    imdbID: 'tt1201607',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
  },
]

describe('<CardList />', () => {
  it('render header', () => {
    render(<CardList movieList={mockData} />)
    const element = screen.getByTestId('card-list')
    expect(element).toBeTruthy()
  })
})

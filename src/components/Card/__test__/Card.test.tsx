import { render, screen } from '@testing-library/react'
import Card from '../Card'
import mockData from '../../../__mockData__/data.json'
import { IMDB_MOVIE_URL, PLACEHOLDER_IMAGE_URL } from '../../../constant'

const movie = mockData['Search'][0]

describe('components/Card', () => {
  it('should render card element', () => {
    render(<Card title={movie.Title} imgSrc={movie.Poster} />)
    const cardElement = screen.getByTestId('card')
    expect(cardElement).toBeInTheDocument()
  })

  it('should render same text passed into title prop', () => {
    render(<Card title={movie.Title} imgSrc={movie.Poster} />)
    const textElement = screen.getByText(movie.Title)
    expect(textElement).toBeInTheDocument()
  })

  it('should render default image when imgSrc prop is equal to "N/A"', () => {
    render(<Card title={movie.Title} imgSrc={'N/A'} />)
    const imageElement = screen.getByRole('img', { name: movie.Title })
    expect(imageElement).toHaveAttribute('src', `${PLACEHOLDER_IMAGE_URL}${movie.Title}`)
  })

  it('should render card element with wrapper when passed into baseURL and id props', () => {
    render(<Card title={movie.Title} imgSrc={movie.Poster} id={movie.imdbID} baseURL={IMDB_MOVIE_URL} />)
    const cardWrapperElement = screen.getByTestId('card-wrapper')
    expect(cardWrapperElement).toBeInTheDocument()
  })
})

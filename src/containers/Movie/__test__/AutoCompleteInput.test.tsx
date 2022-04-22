import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import AutoCompleteInput from '../AutoCompleteInput'
import { fetchMovieList } from '../API'
import mockData from '../../../__mockData__/data.json'

const props = {
  name: 'movieName',
  placeholder: 'Harry...',
}

const MockInput = (props: { name: string; placeholder: string }) => {
  const { name, placeholder } = props
  return <AutoCompleteInput name={name} placeholderText={placeholder} onSearch={jest.fn()} />
}

const mockResponse = [mockData.Search, mockData.totalResults]
jest.mock('../API')
const mockedFetchMovieList = fetchMovieList as jest.Mock

describe('containers/Movie/AutoCompleteInput', () => {
  it('should render input element', () => {
    render(<MockInput name={props.name} placeholder={props.placeholder} />)
    const inputElement = screen.getByPlaceholderText(props.placeholder)
    expect(inputElement).toBeInTheDocument()
  })

  it('should be able to type into input', () => {
    render(<MockInput name={props.name} placeholder={props.placeholder} />)
    const inputElement: HTMLInputElement = screen.getByPlaceholderText(props.placeholder)
    fireEvent.change(inputElement, { target: { value: 'star' } })
    expect(inputElement.value).toBe('star')
  })

  it('should render suggestions when type more than 3 letters', async () => {
    mockedFetchMovieList.mockResolvedValue(mockResponse)
    render(<MockInput name={props.name} placeholder={props.placeholder} />)
    const inputElement: HTMLInputElement = screen.getByPlaceholderText(props.placeholder)
    fireEvent.change(inputElement, { target: { value: 'harry' } })
    await waitFor(() => {
      const suggestionList = screen.getByTestId(/suggestions/i)
      expect(suggestionList).toBeInTheDocument()
    })
  })

  it('should render suggestions and start should same as typed', async () => {
    mockedFetchMovieList.mockResolvedValue(mockResponse)
    render(<MockInput name={props.name} placeholder={props.placeholder} />)
    const inputElement: HTMLInputElement = screen.getByPlaceholderText(props.placeholder)
    fireEvent.change(inputElement, { target: { value: 'harry' } })
    await waitFor(() => {
      const suggestionList = screen.getByTestId(/suggestions/i)
      expect(suggestionList.childElementCount).toBe(8)
    })
  })
})

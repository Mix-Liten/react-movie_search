import mockData from '../../../__mockData__/data.json'
import { MovieDetail } from '../API'

const mockResponse: [MovieDetail[], string] = [mockData.Search, mockData.totalResults]

export const fetchMovieList = jest.fn().mockResolvedValue(mockResponse)

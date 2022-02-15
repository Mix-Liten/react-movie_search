type Response = {
  Response: string
  Search: MovieDetail[]
  totalResults: string
}

export type MovieDetail = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export const fetchMovieList = async (name: string, page?: number): Promise<[MovieDetail[], string]> => {
  const endpoint = `https://www.omdbapi.com/?apikey=8efdf7b9&s=${name}${page ? '&page=' + page : ''}`
  const data: Response = await (await fetch(endpoint)).json()
  return [data.Search, data.totalResults]
}

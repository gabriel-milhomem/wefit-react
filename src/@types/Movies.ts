export interface Movie {
  id: number
  title: string
  price: number
  image: string
}

export interface MoviesApiResponse {
  movies: Movie[]
}

import { AxiosPromise } from 'axios'
import { MoviesApi } from '../../@types'
import { http } from '..'

interface MovieHttpRepository {
  getAll: () => AxiosPromise<MoviesApi>
}

export const MovieService: MovieHttpRepository = {
  getAll: () => http.get(`/movies`),
}

import { AxiosPromise } from "axios";
import { MoviesApiResponse } from "../../@types";
import { http } from "..";

interface MovieHttpRepository {
  list: () => AxiosPromise<MoviesApiResponse>;
}

export const MovieHttpService: MovieHttpRepository = {
  list: () => http.get(`/products`),
};

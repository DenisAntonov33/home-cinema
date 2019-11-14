import {IMovieItem} from '../../models/index';

export interface IMovieState {
  movies: IMovieItem[];
  moviesLoading: boolean;
  moviesError: boolean;
}

export const initialMoviesState: IMovieState = {
  movies: [],
  moviesLoading: false,
  moviesError: false
};

import {RouterReducerState} from '@ngrx/router-store';
import {IMovieState, initialMoviesState} from './movies.state';

export interface IAppState {
    router?: RouterReducerState;
    movies: IMovieState;
}

export const initialAppState = {
  movies: initialMoviesState
};

export const getInitialState = (): IAppState => {
  return initialAppState;
};

import { Action } from '@ngrx/store';
import { IMovieItem } from './../../models/index';

export enum EMovieActions {
  GET_MOVIES = '[Movie] Fetch movies',
  GET_MOVIES_SUCCESS = '[Movie] Fetch movies succeed',
  GET_MOVIES_FAILED = '[Movie] Fetch movies failed',
  GET_MOVIES_LOADING = '[Movie] Fetch movies loading',
}

export class GetMovies implements Action {
  public readonly type = EMovieActions.GET_MOVIES;
}

export class GetMoviesLoading implements Action {
  public readonly type = EMovieActions.GET_MOVIES_LOADING;
}

export class GetMoviesSuccess implements Action {
  public readonly type = EMovieActions.GET_MOVIES_SUCCESS;
  constructor(public paylaod: { movies: IMovieItem[] }) { }
}

export class GetMoviesFailed implements Action {
  public readonly type = EMovieActions.GET_MOVIES_FAILED;
}

export type MovieActions = GetMovies | GetMoviesLoading | GetMoviesSuccess | GetMoviesFailed;

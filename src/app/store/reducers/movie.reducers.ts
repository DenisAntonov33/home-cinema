import { EMovieActions, MovieActions } from './../actions/movie.actions';
import { initialMoviesState, IMovieState } from '../state/movies.state';

export const movieReducer = (state = initialMoviesState, action: MovieActions): IMovieState => {
  switch (action.type) {
    case EMovieActions.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.paylaod.movies
      };
    case EMovieActions.GET_MOVIES_LOADING:
      return {
        ...state,
        moviesLoading: true,
        moviesError: false,
      };
    case EMovieActions.GET_MOVIES_FAILED:
      return {
        ...state,
        moviesLoading: false,
        moviesError: true,
      };
    default:
      return state;
  }
};

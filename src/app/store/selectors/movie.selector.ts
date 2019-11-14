import { createSelector } from '@ngrx/store';
import { IAppState } from './../state/app.state';
import { IMovieState } from './../state/movies.state';

const selectMovies = (state: IAppState) => state.movies;

export const selectMoviesList = createSelector(selectMovies, (state: IMovieState) => state.movies);

import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppState } from './../state/app.state';
import { movieReducer } from './../reducers/movie.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  movies: movieReducer
};

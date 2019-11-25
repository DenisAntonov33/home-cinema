import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import * as moviesActions from './../actions/movie.actions';

@Injectable()
export class MoviesEffects {
  constructor(private httpClient: HttpClient, private actions$: Actions) { }
  @Effect()
  getMovies$ = this.actions$.pipe(
    ofType<moviesActions.GetMovies>(moviesActions.EMovieActions.GET_MOVIES),
    switchMap(() => this.httpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=a6650369f6e96d79c3bbe029b34ed032').pipe(
      map((value: any) => new moviesActions.GetMoviesSuccess({ movies: value.results }))
    )
    ));
}

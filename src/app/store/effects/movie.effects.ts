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
    switchMap(() => this.httpClient.get('http://jsonplaceholder.typicode.com/posts').pipe(
      map((value: any[]) => new moviesActions.GetMoviesSuccess({ movies: value }))
    )
    ));
}

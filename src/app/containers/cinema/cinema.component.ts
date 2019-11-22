import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { GetMovies } from '../../store/actions/movie.actions';
import { selectMoviesList } from '../../store/selectors/movie.selector';
import { IMovieItem } from '../../models/index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getInitialState } from '../../store/state/app.state';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  movies$: Observable<IMovieItem[]>;

  constructor(private store: Store<IAppState>) {
    this.movies$ = this.store.pipe(select(selectMoviesList));
    console.log('this.movies$ :', this.movies$);
    console.log('this._store.select() :', this.store.select(selectMoviesList));

  }

  // movies$: Observable<IMovieItem[]> = this.store.select(selectMoviesList);

  ngOnInit() {
    this.store.dispatch(new GetMovies());
  }

  test() {
    console.log('this.movie :', this.movies$);
    console.log('getInitialState :', getInitialState());
    // console.log('select(selectMoviesList) :', select(selectMoviesList));
    console.log('this.store.pipe(select(selectMoviesList)) :', this.store.pipe(select(selectMoviesList)));
  }

}

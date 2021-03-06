import { Component, OnInit, Input } from '@angular/core';
import { IMovieItem } from 'src/app/models';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  constructor() { }

  @Input() movieItem: IMovieItem;

  protected releaseDate() {
    return this.movieItem ? this.movieItem.release_date : '2000-01-01';
  }

  ngOnInit() {
  }

}

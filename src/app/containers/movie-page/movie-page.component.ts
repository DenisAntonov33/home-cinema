import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  protected movie = null;

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.api.getMovieItem(id).subscribe(r => {
      this.movie = r;
      console.log('this.movie :', this.movie);
    });
    console.log(id);
  }

}

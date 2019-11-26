import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

  @ViewChild('searchInput', { static: true }) input: ElementRef;

  constructor(private api: ApiService) { }

  searchedText = '';

  results = [];

  clearResults() {
    this.results = [];
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap((event: KeyboardEvent) => {
          const value = this.input.nativeElement.value;
          this.api.search(value).subscribe(r => {
            this.results = r.results;
          });
        })
      )
      .subscribe();
  }

}

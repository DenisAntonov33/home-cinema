import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiKey = 'a6650369f6e96d79c3bbe029b34ed032';

  search(searchedText: string) {
    return this.http.get(`${environment.apiUrl}/search/company?api_key=${this.apiKey}&query=${searchedText}&page=1
    `)
      .pipe(map((r: any) => {
        return r;
      }));
  }

  getMovieItem(id) {
    return this.http.get(`${environment.apiUrl}/movie/${id}?api_key=${this.apiKey}`)
      .pipe(map((r: any) => {
        return r;
      }));
  }
}

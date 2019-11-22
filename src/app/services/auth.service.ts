import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentTokenSubject: BehaviorSubject<string>;
  public currentToken: Observable<string>;

  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject(localStorage.getItem('token'));
    this.currentToken = this.currentTokenSubject.asObservable();
  }


  public get token() {
    return this.currentTokenSubject.value;
  }

  login() {
    return this.http.get(`${environment.apiUrl}/authentication/guest_session/new?api_key=a6650369f6e96d79c3bbe029b34ed032`)
      .pipe(map((r: any) => {
        localStorage.setItem('token', JSON.stringify(r.guest_session_id));
        this.currentTokenSubject.next(r.guest_session_id);
        return r;
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.currentTokenSubject.next(null);
  }
}

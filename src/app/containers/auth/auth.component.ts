import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(protected auth: AuthService) { }

  login() {
    this.auth.login().subscribe(r => {
      console.log('r1 :', r);
    });

    console.log('this.auth.token :', this.auth.token);
  }

  ngOnInit() {
  }

}

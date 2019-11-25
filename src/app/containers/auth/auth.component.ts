import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(protected auth: AuthService, private router: Router) { }

  login() {
    this.auth.login().subscribe(r => {
      this.router.navigate(['/personal']);
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(protected auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['']);

  }

}

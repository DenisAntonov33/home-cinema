import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnounceComponent } from './containers/announce/announce.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { HomeComponent } from './containers/home/home.component';
import { CinemaComponent } from './containers/cinema/cinema.component';
import { AuthComponent } from './containers/auth/auth.component';
import { PersonalComponent } from './containers/personal/personal.component';
import { MoviePageComponent } from './containers/movie-page/movie-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'announce', component: AnnounceComponent },
  { path: 'movie', component: CinemaComponent },
  { path: 'movie/:id', component: MoviePageComponent },
  { path: 'login', component: AuthComponent },
  { path: 'personal', canActivate: [AuthGuardService], component: PersonalComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

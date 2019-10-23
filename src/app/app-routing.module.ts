import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnounceComponent } from './announce/announce.component';
import { StoreComponent } from './store/store.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CinemaComponent } from './cinema/cinema.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'announce', component: AnnounceComponent },
  { path: 'store', component: StoreComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnounceComponent } from './containers/announce/announce.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { HomeComponent } from './containers/home/home.component';
import { CinemaComponent } from './containers/cinema/cinema.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MovieItemComponent } from './containers/cinema/movie-item/movie-item.component';
import { appReducers } from './store/reducers/app.reducers';
import { MoviesEffects } from './store/effects/movie.effects';
import { environment } from './../environments/environment';
import { AuthComponent } from './containers/auth/auth.component';
import { PersonalComponent } from './containers/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnounceComponent,
    NotFoundComponent,
    HomeComponent,
    CinemaComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MovieItemComponent,
    AuthComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([MoviesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

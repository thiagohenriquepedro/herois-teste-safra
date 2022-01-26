import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MaterialModule } from './material/material.module';
import { Api } from './shared/api/api';
import { ComicInfoComponent } from './shared/components/comic-info/comic-info.component';
import { HeroBasicInfoComponent } from './shared/components/hero-basic-info/hero-basic-info.component';
import { HeroeCardComponent } from './shared/components/heroe-card/heroe-card.component';
import { ThumbnailComponent } from './shared/components/thumbnail/thumbnail.component';
import { HeroService } from './shared/services/hero.service';
import { StateModule } from './state/state.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const components =
  [HeroListComponent,
    HeroDetailComponent,
    HeroeCardComponent,
    ThumbnailComponent];


const pipes =
  [];


const pages =
  [];
const services = [
  Api,
  HeroService,
];


const modules = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  ToastrModule.forRoot({
    preventDuplicates: true,
  }), // ToastrModule added
  StateModule.forRoot(),
  MaterialModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule
];



@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...components,
    ...pipes,
    HeroBasicInfoComponent,
    ComicInfoComponent,

  ],
  imports: [
    ...modules
  ],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReviewLandingComponent } from './Pages/review-landing/review-landing.component';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { BarraSuperiorComponent } from './Components/barra-superior/barra-superior.component';
import { MovieReviewComponent } from './Components/movie-review/movie-review.component';
import { SearchboxComponent } from './Components/searchbox/searchbox.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { ReviewListComponent } from './Components/review-list/review-list.component';
  

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    BarraSuperiorComponent,
    MovieReviewComponent,
    ReviewLandingComponent,
    SearchboxComponent,
    ProfilePageComponent,
    MovieSearchComponent,
    ReviewListComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

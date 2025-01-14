import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { MovieReviewComponent } from './Components/movie-review/movie-review.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';



const routes: Routes = [
  { path: '', component: CarruselComponent },
  { path: 'movie-review/:id', component: MovieReviewComponent },
  { path: 'profile-page', component: ProfilePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'search/:query', component: MovieSearchComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

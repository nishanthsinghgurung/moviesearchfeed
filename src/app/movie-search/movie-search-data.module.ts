import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchFacade } from './movie-search.facade';
import { MovieSearchService } from '../api/movie-search.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MovieSearchFacade,
    MovieSearchService
  ]
})
export class MovieSearchDataModule {}

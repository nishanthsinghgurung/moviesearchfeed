import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

import { MovieSearchDataModule } from './movie-search/movie-search-data.module';
import { MovieSearchEffects } from './movie-search/ngrx/movie-search.effects';
import { movieSearchReducer } from './movie-search/ngrx/movie-search.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    EffectsModule.forFeature([MovieSearchEffects]),
    MovieSearchDataModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IMovieSearchState } from "../movie-search/ngrx/movie-search-state.interface";

import { movieSearchReducer } from '../movie-search/ngrx/movie-search.reducer';

export interface State {

}
export interface IndexState {
    movieSearchData?: IMovieSearchState;
}

export const reducers: ActionReducerMap<IndexState> = {
  movieSearchData: movieSearchReducer
};


export const metaReducers: MetaReducer<IndexState>[] = !environment.production ? [] : [];

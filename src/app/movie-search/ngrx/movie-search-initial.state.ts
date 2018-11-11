import { IMovieSearchState } from './movie-search-state.interface';
import { movieSearchAdaptor } from './movie-search.adaptor';
export const movieSearchInitialState: IMovieSearchState = movieSearchAdaptor.getInitialState({
    data: {}});
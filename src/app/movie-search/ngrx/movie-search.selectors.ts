import { createSelector } from "@ngrx/store";
import { IMovieSearchState } from "./movie-search-state.interface";
import { movieSearchAdaptor } from "./movie-search.adaptor";
import { IndexState } from "src/app/reducers";
export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = movieSearchAdaptor.getSelectors();

const selectFeature = (state: IndexState) => {
    return state.movieSearchData;
};

export const selectMovieSearchState = createSelector(selectFeature, (state: IMovieSearchState) => {
    if(!state) { return null;}
    return state.data;
});

export class MovieSearchSelectors {
    public static data: any = createSelector(
        selectMovieSearchState,
        (state: IMovieSearchState) => {
            if(!state) { return null;}
            return state;
        }
    );
}
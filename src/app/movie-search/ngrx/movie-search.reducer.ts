import { IMovieSearchState } from "./movie-search-state.interface";
import { MovieSearchActionsUnion, movieSearchActionTypes } from "./movie-search.action";
import { movieSearchInitialState } from "./movie-search-initial.state";

export function movieSearchReducer(
    state: IMovieSearchState = movieSearchInitialState,
    action: MovieSearchActionsUnion
): IMovieSearchState {

    switch(action.type) {
        case movieSearchActionTypes.SEARCH_BY_TITLE_SUCCESS: {
            return  {
                ...state,
                data: action.payload            };
        }

        default:{
            return state;
        }
    }
}
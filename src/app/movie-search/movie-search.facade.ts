import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMovieSearchState } from "./ngrx/movie-search-state.interface";
import { Store } from "@ngrx/store";
import { SearchByTitleAction } from "./ngrx/movie-search.action";
import { MovieSearchSelectors } from "./ngrx/movie-search.selectors";
import { EntityState } from "@ngrx/entity";
import { IndexState } from "../reducers";

@Injectable()
export class MovieSearchFacade {
    public movieSearchResult$: Observable<any>;

    constructor(
        private store: Store<IndexState | EntityState<any>>
    ) {
        this.movieSearchResult$ = this.store.select(MovieSearchSelectors.data);
    }

    public getMovieSearchData(title: string): void {
        this.store.dispatch(new SearchByTitleAction(title));
    }
}
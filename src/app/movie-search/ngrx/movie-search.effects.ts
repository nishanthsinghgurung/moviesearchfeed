import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { Action } from '@ngrx/store';
import { movieSearchActionTypes, SearchByTitleAction, SearchByTitleSuccessAction, SearchByTitleFailureAction } from './movie-search.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { MovieSearchService } from '../../api/movie-search.service';

@Injectable()
export class MovieSearchEffects {

    @Effect()
    public searchByTitle$: Observable<Action> = this.actions$.pipe(
      ofType(movieSearchActionTypes.SEARCH_BY_TITLE),
      switchMap((action: SearchByTitleAction) => {

        return this.movieSearchService.getMovieSearchData(action.title)
            .pipe(
                map((data: any) => {
                    return new SearchByTitleSuccessAction(data, action.title);
                }),
                catchError((error: any) => of(new SearchByTitleFailureAction('Error')))
            )
      })
    );

    constructor
    (
        private actions$: Actions,
        private movieSearchService: MovieSearchService
    ) {}
}
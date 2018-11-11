import { Action } from '@ngrx/store';

export enum movieSearchActionTypes {
    SEARCH_BY_TITLE = '[Movie] search title',
    SEARCH_BY_TITLE_SUCCESS = '[Movie] search title success',
    SEARCH_BY_TITLE_FAILURE = '[Movie] search title failure'
}

export class SearchByTitleAction implements Action {
    public readonly type = movieSearchActionTypes.SEARCH_BY_TITLE;

    constructor(
        public title: string
        ){}
}

export class SearchByTitleSuccessAction implements Action {
    public readonly type = movieSearchActionTypes.SEARCH_BY_TITLE_SUCCESS;

    constructor(
        public payload: any,
        public title: string
        ){
        }
}

export class SearchByTitleFailureAction implements Action {
    public readonly type = movieSearchActionTypes.SEARCH_BY_TITLE_FAILURE;

    constructor(
        public payload: any
        ){}
}

export type MovieSearchActionsUnion = 
    SearchByTitleAction |
    SearchByTitleSuccessAction |
    SearchByTitleFailureAction ;
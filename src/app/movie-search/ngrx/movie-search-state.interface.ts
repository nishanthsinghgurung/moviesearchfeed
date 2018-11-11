import { EntityState } from '@ngrx/entity';




export interface IMovieSearchState extends EntityState<any> {
    data?: any;
}
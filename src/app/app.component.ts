import { Component, OnInit } from '@angular/core';
import { MovieSearchFacade } from './movie-search/movie-search.facade';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public titleData: string;
  public movieData$: Observable<any>;
  public ngUnsubscribe$: Subject<boolean> = new Subject();
  public data: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  public result: Array<any> =[];
  public resultsExist: boolean = false;
  
  constructor(
    private movieSearchFacade: MovieSearchFacade
  ) {}

  public ngOnInit(): void {
    this.movieData$ = this.movieSearchFacade.movieSearchResult$;

    this.movieData$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((data: any) => {
      if(data.title || data.Poster) {
        this.result.push({title: data.Title, poster: data.Poster});
        this.resultsExist = true;
      }
    });
  }

  public setTitle(event: any) {
    this.titleData = event.target.value;
  }

  public getMovieData(): void {
    this.movieSearchFacade.getMovieSearchData(this.titleData);
  }

}

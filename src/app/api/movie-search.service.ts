import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MovieSearchService {
    constructor(
        private httpClient: HttpClient
    ) { }

    public getMovieSearchData(title: string): Observable<any> {
        return this.httpClient.get<any>('http://www.omdbapi.com/?t=' + title + '&apikey=5dfebad1');
    }
}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IMarket } from '../../models/market';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SimilarWebsiteService {
  apiUrl = "https://api.trade.gov/market_research_library/search"
  apiKey = "?api_key=9TJTRW2ebKSJP72HftCKOkob&";
  constructor(private _http: Http) { }

  getWebsites(searchtext:string): Observable<IMarket[]> {
    var finalApiUrl = this.apiUrl+this.apiKey+'q='+searchtext;
    console.log("Market: ",finalApiUrl );
    return this._http   
        .get(finalApiUrl)
        .map((response: Response) => <IMarket[]> response.json().results)
        .do(data => console.log(data))
        .catch(this.handleError);
  } 
  
  private handleError(error: Response) {
    console.error(error);
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }
}
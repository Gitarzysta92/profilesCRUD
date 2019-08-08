import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { url } from '../../config'
import { MessageService } from '../messages/message.service';
import { Page } from './page';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private pagesUrl = `${url}/api/pages`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  public addPage(page: Page): Observable<Page> {
    return this.http.post<Page>(`${this.pagesUrl}`, page)
      .pipe(
        catchError(this.handleError<Page>('addPage'))
      )
  }

  public getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.pagesUrl)
      .pipe(
        catchError(this.handleError<Page[]>('getPages', []))
      )
  }

  public getPage(id: string): Observable<Page> {
    return this.http.get<Page>(`${this.pagesUrl}/${id}`)
      .pipe(
        catchError(this.handleError<Page>('getPages')) 
      )
  }

  public updatePage(page: Page): Observable<Page> {
    return this.http.put<Page>(`${this.pagesUrl}`, page)
      .pipe(
        catchError(this.handleError<Page>('updatePage'))
      )
  }

  public deletePage(id: string) {
    return this.http.delete(`${this.pagesUrl}/${id}`)
      .pipe(
        catchError(this.handleError<Page>('removePage'))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}

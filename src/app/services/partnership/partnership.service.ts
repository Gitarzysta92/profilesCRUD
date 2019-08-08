import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { url } from '../../config'
import { MessageService } from '../messages/message.service';
import { Partner } from './partner';


@Injectable({
  providedIn: 'root'
})

export class PartnershipService {

  private partnersUrl = `${url}/api/partners`;
  

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  public addPartner(partner: Partner): Observable<Partner> {
    return this.http.post<Partner>(`${this.partnersUrl}`, partner)
      .pipe(
        catchError(this.handleError<Partner>('addPartner'))
      );
  }

  public getPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.partnersUrl)
      .pipe(
        catchError(this.handleError<Partner[]>('getPartners'))
      );
  }

  public getPartner(id: string): Observable<Partner> {
    return this.http.get<Partner>(`${this.partnersUrl}/${id}`)
      .pipe(
        catchError(this.handleError<Partner>('getPartner'))
      );
  }

  public updatePartner(partner: Partner): Observable<Partner> {
    return this.http.put<Partner>(`${this.partnersUrl}`, partner)
      .pipe(
        catchError(this.handleError<Partner>('updatePartner'))
      );
  }

  public deletePartner(id: string){
    return this.http.delete<Partner>(`${this.partnersUrl}/${id}`)
      .pipe(
        catchError(this.handleError<Partner>('deletePartner'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}





import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { url } from '../../config'
import { MessageService } from '../messages/message.service';
import { Profile } from './profile';


@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private profilesUrl = `${url}/api/users`;


  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  public addProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.profilesUrl}`, profile)
      .pipe(
        catchError(this.handleError<Profile>('addProfile'))
      )
  }

  public getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesUrl)
      .pipe(
        catchError(this.handleError<Profile[]>('getProfiles', []))
      )
  }

  public getProfile(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.profilesUrl}/${id}`)
      .pipe(
        catchError(this.handleError<Profile>('getProfile')) 
      )
  }

  public updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.profilesUrl}`, profile)
      .pipe(
        catchError(this.handleError<Profile>('updateProfile'))
      )
  }

  public deleteProfile(id: string){
    return this.http.delete(`${this.profilesUrl}/${id}`)
      .pipe(
        catchError(this.handleError<Profile>('removeProfile'))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { MessageService } from '../messages/message.service';
import { Profile } from './profile';

import { profiles } from './dummy-data';

let i = 6;

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private profiles: Profile[] = profiles;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  public getProfiles(): Profile[] {
    return this.profiles;
  }

  public getProfile(id: string): Profile {
    return this.profiles.find(profile => profile.id === id);
  }

  public addProfile(profile: Profile): number {
    const id = ''+(++i);
    const prof = this.profiles.push(Object.assign(profile, {id} ));
    return prof;
  }

  public updateProfile(profile: Profile): Profile[] {
    this.profiles = this.profiles.map(curr => {
      return curr.id === profile.id ? profile : curr;
    });
    return this.profiles;
  }

  public deleteProfile(id: string){
    this.profiles = this.profiles.filter(curr => {
      return curr.id === id ? false : curr;
    });
    return this.profiles;
  }
}

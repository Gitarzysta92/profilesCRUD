import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { MessageService } from '../messages/message.service';
import { Partner } from './partner';

import { partners } from './dummy-data';


let i = 6;

@Injectable({
  providedIn: 'root'
})
export class PartnershipService {
  
  private partners: Partner[] = partners;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  public getPartners(): Partner[] {
    return this.partners;
  }

  public getPartner(id: string): Partner {
    return this.partners.find(profile => profile.id === id);
  }

  public addPartner(partner: Partner): number {
    const id = ''+(++i);
    const prof = this.partners.push(Object.assign(partner, {id} ));
    return prof;
  }

  public updatePartner(partner: Partner): Partner[] {
    this.partners = this.partners.map(curr => {
      return curr.id === partner.id ? partner : curr;
    });
    return this.partners;
  }

  public deletePartner(id: string){
    this.partners = this.partners.filter(curr => {
      return curr.id === id ? false : curr;
    });
    return this.partners;
  }


}





import { Component, OnInit } from '@angular/core';

import { Partner } from '../../../services/partnership/partner';
import { PartnershipService } from '../../../services/partnership/partnership.service';


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  profiles: Partner[] = [];
  topRated: Partner[] = [];

  constructor(private partnershipService: PartnershipService) {}

  getProfiles(): void {
    this.partnershipService.getPartners()
      .subscribe(profiles => {
        this.profiles = profiles;
      });
  }

  removeProfile(id: string): void {
    this.partnershipService.deletePartner(id)
      .subscribe(res => this.getProfiles());
  }
  
  ngOnInit() {
    this.getProfiles();
  }


}




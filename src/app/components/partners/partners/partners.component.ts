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
    console.log(this.partnershipService);
    this.profiles = this.partnershipService.getPartners();
  }

  removeProfile(id: string): void {
    this.profiles = this.partnershipService.deletePartner(id)
  }
  
  ngOnInit() {
    this.getProfiles();
  }


}




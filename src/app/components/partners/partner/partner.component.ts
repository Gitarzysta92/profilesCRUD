import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Partner } from '../../../services/partnership/partner';
import { PartnershipService } from '../../../services/partnership/partnership.service';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})

export class PartnerComponent implements OnInit {
  profile: Partner;
  
  constructor(
    private route: ActivatedRoute,
    private partnershipService: PartnershipService,
    private location: Location
  ) {}

  getProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.profile = this.partnershipService.getPartner(id)
  }

  removeProfile(id: string): void {
    this.partnershipService.deletePartner(id)
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getProfile();
    
  }

}
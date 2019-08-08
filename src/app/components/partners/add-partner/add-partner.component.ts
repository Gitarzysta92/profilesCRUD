import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';

import { Partner } from '../../../services/partnership/partner';
import { PartnershipService } from '../../../services/partnership/partnership.service';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.scss']
})

export class AddPartnerComponent implements OnInit {

  formSetup: object = {
    buttonText: 'Dodaj partnera',
    callback: this.addProfile.bind(this)
  }

  constructor(
    private partnershipService: PartnershipService,
    private location: Location
  ) {}

  addProfile(formData: Partner): void {
    this.partnershipService.addPartner(formData)
      .subscribe(res => res && this.location.back());
  }


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}

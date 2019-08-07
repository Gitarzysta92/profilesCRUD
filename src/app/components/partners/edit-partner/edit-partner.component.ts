import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Partner } from '../../../services/partnership/partner';
import { PartnershipService } from '../../../services/partnership/partnership.service';

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.scss']
})


export class EditPartnerComponent implements OnInit {

  formSetup: object = {
    buttonText: 'Zaktualizuj profil',
    callback: this.updateProfile.bind(this),
    getUserData: this.getUserData.bind(this)
  }

  constructor(
    private route: ActivatedRoute,
    private partnershipService: PartnershipService,
    private location: Location
  ) {}

  updateProfile(formData): void {
    const newData = Object.assign(this.getUserData(), formData);
    this.partnershipService.updatePartner(formData);
    this.location.back();
  }

  getUserData(): Partner {
    const id = this.route.snapshot.paramMap.get('id');
    return this.partnershipService.getPartner(id);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }
}


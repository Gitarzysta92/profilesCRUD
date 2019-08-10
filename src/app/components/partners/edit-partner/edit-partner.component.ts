import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Partner } from '../../../services/partnership/partner';
import { PartnershipService } from '../../../services/partnership/partnership.service';


interface FormSetup {
  buttonText: string;
  callback: Function;
  userData?: Observable<Partner>;
}

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.scss']
})


export class EditPartnerComponent implements OnInit {

  formSetup: FormSetup = {
    buttonText: 'Zaktualizuj profil',
    callback: this.updateProfile.bind(this)
  }

  constructor(
    private route: ActivatedRoute,
    private partnershipService: PartnershipService,
    private location: Location
  ) {}

  updateProfile(formData): void {
    const id = this.route.snapshot.paramMap.get('id');
    const resultWithId = Object.assign(formData, { id });
    this.partnershipService.updatePartner(resultWithId)
      .subscribe(res => res && this.location.back());
  }

  getUserData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.formSetup.userData = this.partnershipService.getPartner(id);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getUserData();
  }
}


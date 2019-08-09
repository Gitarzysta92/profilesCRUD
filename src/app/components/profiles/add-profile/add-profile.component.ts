import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';

import { Profile } from '../../../services/profiles/profile';
import { ProfileService } from '../../../services/profiles/profile.service';


@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})


export class AddProfileComponent implements OnInit {

  formSetup: object = {
    buttonText: 'Dodaj profil',
    callback: this.addProfile.bind(this)
  }

  constructor(
    private profileService: ProfileService,
    private location: Location
  ) {}

  
  addProfile(formData: Profile): void {
    this.profileService.addProfile(formData)
      .subscribe(res => res && this.location.back());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}

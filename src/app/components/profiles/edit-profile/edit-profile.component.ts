import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Profile } from '../../../services/profiles/profile';
import { ProfileService } from '../../../services/profiles/profile.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})


export class EditProfileComponent implements OnInit {

  formSetup: object = {
    buttonText: 'Zaktualizuj profil',
    callback: this.updateProfile.bind(this),
    getUserData: this.getUserData.bind(this)
  }

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  updateProfile(formData): void {
    const newData = Object.assign(this.getUserData(), formData);
    this.profileService.updateProfile(formData);
    this.location.back();
  }

  getUserData(): Profile {
    const id = this.route.snapshot.paramMap.get('id');
    return this.profileService.getProfile(id);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }
}

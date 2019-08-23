import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Profile } from '../../../services/profiles/profile';
import { ProfileService } from '../../../services/profiles/profile.service';


interface FormSetup {
  buttonText: string;
  callback: Function;
  userData?: Observable<Profile>;
}


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})


export class EditProfileComponent implements OnInit {

  formSetup: FormSetup = {
    buttonText: 'Zaktualizuj profil',
    callback: this.updateProfile.bind(this)
  }

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  updateProfile(formData): void {
    const id = this.route.snapshot.paramMap.get('id');
    const resultWithId = Object.assign(formData, { id });
    this.profileService.updateProfile(resultWithId)
      .subscribe(res => res && this.location.back());
  }

  getUserData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.formSetup.userData = this.profileService.getProfile(id);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getUserData();
  }
}
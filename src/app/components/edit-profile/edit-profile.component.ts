import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Profile } from '../../services/profiles/profile';
import { ProfileService } from '../../services/profiles/profile.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})


export class EditProfileComponent implements OnInit {

  formSetup: object = {
    buttonText: 'Update profile',
    callback: this.updateProfile.bind(this),
    getUserData: this.getUserData()
  }

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  updateProfile(formData): void {
    formData.lastUpdate = this.getCurrentDate()  
    this.profileService.updateProfile(formData)
      .subscribe(res => res && this.location.back());
  }

  getCurrentDate(): string {
    const pipe = new DatePipe('en-GB');
    const currentDateTime = Date.now();
    return pipe.transform(currentDateTime, 'short');
  }

  getUserData(): Function {
    const id = this.route.snapshot.paramMap.get('id');
    return (): Observable<Profile> => this.profileService.getProfile(id) 
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }
}

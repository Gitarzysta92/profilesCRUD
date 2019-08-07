import { Component, OnInit } from '@angular/core';

import { Profile } from '../../../services/profiles/profile';
import { ProfileService } from '../../../services/profiles/profile.service';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})


export class ProfilesComponent implements OnInit {
  profiles: Profile[] = [];
  topRated: Profile[] = [];

  constructor(private profileService: ProfileService) {}

  getProfiles(): void {
    this.profiles = this.profileService.getProfiles();
  }

  removeProfile(id: string): void {
    this.profiles = this.profileService.deleteProfile(id)
  }
  
  ngOnInit() {
    this.getProfiles();
  }

}

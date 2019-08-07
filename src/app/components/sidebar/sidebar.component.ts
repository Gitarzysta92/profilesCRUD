import { Component, OnInit } from '@angular/core';

import { AuthenticationService} from '../../services/auth-service/auth-service.service';
import { ProfileService } from '../../services/profiles/profile.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  username: string;

  constructor(
    private profileService: ProfileService,
    private authenticationService: AuthenticationService
  ) {}

  getUserName(): void {
    this.username = this.authenticationService.currentUserValue.username;
  }

  logout(): void {
    this.authenticationService.logout();
  }

  ngOnInit() {
    this.getUserName();
  }

}

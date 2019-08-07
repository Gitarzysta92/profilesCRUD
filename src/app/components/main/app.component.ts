import { Component } from '@angular/core';

import { AuthenticationService } from '../../services/auth-service/auth-service.service';
import { User } from '../../services/auth-service/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panelu Memorium';
  currentUser: User;
  constructor(
    private authenticationService: AuthenticationService
  ) {
   // this.authenticationService.currentUser.subscribe(curr => this.currentUser = curr);
   this.currentUser = this.authenticationService.currentUser;
  }
}

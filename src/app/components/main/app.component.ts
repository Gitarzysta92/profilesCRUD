import { Component } from '@angular/core';

import { AuthenticationService } from '../../services/auth-service/auth-service.service';
import { User } from '../../services/auth-service/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profilesCRUD';
  currentUser: User;
  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(curr => this.currentUser = curr);
  }
}

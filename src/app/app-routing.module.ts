import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { AuthGuard } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfilesComponent, canActivate:[AuthGuard] },
  { path: 'profiles/add', component: AddProfileComponent },
  { path: 'profiles/:id', component: ProfileComponent },
  { path: 'profiles/edit/:id', component: EditProfileComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

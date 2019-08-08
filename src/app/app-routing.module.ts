import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

// profiles
import { ProfilesComponent } from './components/profiles/profiles/profiles.component';
import { ProfileComponent } from './components/profiles/profile/profile.component';
import { AddProfileComponent } from './components/profiles/add-profile/add-profile.component';
import { EditProfileComponent } from './components/profiles/edit-profile/edit-profile.component';

// partners
import { PartnersComponent } from './components/partners/partners/partners.component';
import { PartnerComponent } from './components/partners/partner/partner.component';
import { AddPartnerComponent } from './components/partners/add-partner/add-partner.component';
import { EditPartnerComponent } from './components/partners/edit-partner/edit-partner.component';

// pages
import { PagesComponent } from './components/pages/pages/pages.component';
import { PageComponent } from './components/pages/page/page.component';
import { AddPageComponent } from './components/pages/add-page/add-page.component';
import { EditPageComponent } from './components/pages/edit-page/edit-page.component';


const routes: Routes = [

  // profiles endpoints
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfilesComponent, canActivate:[AuthGuard] },
  { path: 'profiles/add', component: AddProfileComponent, canActivate:[AuthGuard] },
  { path: 'profiles/:id', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'profiles/edit/:id', component: EditProfileComponent, canActivate:[AuthGuard] },

  // partners endpoints
  { path: 'partners', component: PartnersComponent, canActivate:[AuthGuard] },
  { path: 'partners/add', component: AddPartnerComponent, canActivate:[AuthGuard] },
  { path: 'partners/:id', component: PartnerComponent, canActivate:[AuthGuard] },
  { path: 'partners/edit/:id', component: EditPartnerComponent, canActivate:[AuthGuard] },

  // pages endpoints
  { path: 'pages', component: PagesComponent, canActivate:[AuthGuard] },
  { path: 'pages/add', component: AddPageComponent, canActivate:[AuthGuard] },
  { path: 'pages/:id', component: PageComponent, canActivate:[AuthGuard] },
  { path: 'pages/edit/:id', component: EditPageComponent, canActivate:[AuthGuard] },


  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

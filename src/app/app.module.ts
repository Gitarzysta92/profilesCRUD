import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



// import misc material elements
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

// import form material elements
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// App root component
import { AppComponent } from './components/main/app.component';

// App components
import { NavigationComponent } from './components/navigation/navigation.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// App components -> profiles
import { ProfilesComponent } from './components/profiles/profiles/profiles.component';
import { ProfileComponent } from './components/profiles/profile/profile.component';
import { ProfileFormComponent } from './components/profiles/profile-form/profile-form.component';
import { AddProfileComponent } from './components/profiles/add-profile/add-profile.component';
import { EditProfileComponent } from './components/profiles/edit-profile/edit-profile.component';

// App components -> partners
import { PartnersComponent } from './components/partners/partners/partners.component';
import { PartnerComponent } from './components/partners/partner/partner.component';
import { PartnerFormComponent } from './components/partners/partner-form/partner-form.component';
import { AddPartnerComponent } from './components/partners/add-partner/add-partner.component';
import { EditPartnerComponent } from './components/partners/edit-partner/edit-partner.component';


// App components -> pages
import { PagesComponent } from './components/pages/pages/pages.component';
import { AddPageComponent } from './components/pages/add-page/add-page.component';
import { EditPageComponent } from './components/pages/edit-page/edit-page.component';
import { PageComponent } from './components/pages/page/page.component';
import { PageFormComponent } from './components/pages/page-form/page-form.component';


// Routing
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    MessagesComponent,
    ProfileComponent,
    NavigationComponent,
    ProfileFormComponent,
    AddProfileComponent,
    EditProfileComponent,
    LoaderComponent,
    LoginComponent,
    SidebarComponent,
    PartnersComponent,
    PartnerComponent,
    PartnerFormComponent,
    AddPartnerComponent,
    EditPartnerComponent,
    PagesComponent,
    AddPageComponent,
    EditPageComponent,
    PageComponent,
    PageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule
  ],
  providers: [
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

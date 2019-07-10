import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Profile } from '../../services/profiles/profile';
import { validationMessages } from './validation-messages';

const countries = ['Polish ', 'English ', 'French', 'Italian', 'German'];


interface Provider {
  buttonText: string;
  callback(formData: Profile ): void;
  getUserData?(): any;
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})

export class ProfileFormComponent {
  @Input() Provider: Provider;


  countries: Array<string>;
  profileForm: FormGroup;
  profile: object;
  validationMessages: object;
  buttonText: string;
  profileStatus: object[] = [ { value: true, view: 'Active' }, { value: false, view: 'Inactive' }]


  constructor(private formBuilder: FormBuilder) {
    this.profile = {};
    this.validationMessages = validationMessages;
    this.countries = countries;
    this.createForm(); 
  }

  onSubmit() {
    const updatedData = Object.assign(this.profile, this.profileForm.value);
    if (this.profileForm.invalid) return;
    this.Provider.callback(updatedData);
  }

  ngOnInit() {
    const getUserData = this.Provider.getUserData;
    if (getUserData) getUserData().subscribe(user => {
      this.profile = user;
      this.profileForm.patchValue(user);
    })
    this.buttonText = this.Provider.buttonText;
  }


  createForm() {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.maxLength(25),
		    Validators.minLength(1),
		    Validators.pattern('^[a-zA-Z]+'),
        Validators.required
      ])],
      surname: ['', Validators.compose([
        Validators.maxLength(25),
		    Validators.minLength(1),
		    Validators.pattern('^[a-zA-Z]+'),
        Validators.required
      ])],
      phone: ['', Validators.compose([
        Validators.maxLength(25),
		    Validators.minLength(5),
		    Validators.pattern('[+][0-9]{2}(\\s[0-9]{3})+'),
        Validators.required
      ])],
      email: ['', Validators.compose([
		    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.required
      ])],
      rating: ['', Validators.compose([
        Validators.max(10),
        Validators.min(0),
        Validators.required
      ])],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      nationalities: ['', Validators.required],
      isActive: ['', Validators.required]
    });
  }
}

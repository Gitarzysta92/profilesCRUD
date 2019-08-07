import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Partner } from '../../../services/partnership/partner';
import { validationMessages } from './validation-messages';

interface Provider {
  buttonText: string;
  callback(formData: Partner ): void;
  getUserData?(): any;
}

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.scss']
})

export class PartnerFormComponent {
  @Input() Provider: Provider;


  profileForm: FormGroup;
  profile: object;
  validationMessages: object;
  buttonText: string;
  profileStatus: object[] = [ { value: true, view: 'Active' }, { value: false, view: 'Inactive' }]


  constructor(private formBuilder: FormBuilder) {
    this.profile = {};
    this.validationMessages = validationMessages;
    this.createForm(); 
  }

  onSubmit() {
    const updatedData = Object.assign(this.profile, this.profileForm.value);
    if (this.profileForm.invalid) return;
    this.Provider.callback(updatedData);
  }

  ngOnInit() {
    if (!this.Provider) return;
    const getUserData = this.Provider.getUserData;
    console.log(getUserData);
    getUserData && this.profileForm.patchValue(this.Provider.getUserData());
    this.buttonText = this.Provider.buttonText;
  }


  createForm() {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.compose([
       // Validators.maxLength(25),
		   // Validators.minLength(1),
		   // Validators.pattern('^[a-zA-Z]+'),
        Validators.required
      ])],
      email: ['', Validators.compose([
		   // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.required
      ])],
      adress: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}

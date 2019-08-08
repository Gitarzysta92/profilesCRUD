import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Page } from '../../../services/pages/page';
import { validationMessages } from './validation-messages';

interface Provider {
  buttonText: string;
  callback(formData: Page ): void;
  userData?: any;
}


@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})


export class PageFormComponent {
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
    this.createForm(); 
  }

  onSubmit() {
    const updatedData = Object.assign(this.profile, this.profileForm.value);
    if (this.profileForm.invalid) return;
    this.Provider.callback(updatedData);
  }

  ngOnInit() {
    if (this.Provider.userData) {
      this.Provider.userData
        .subscribe(res => res && this.profileForm.patchValue(res))
    } 
    this.buttonText = this.Provider.buttonText;
  }


  createForm() {
    this.profileForm = this.formBuilder.group({
      content: ['', Validators.compose([
       // Validators.maxLength(25),
		   // Validators.minLength(1),
		   // Validators.pattern('^[a-zA-Z]+'),
        Validators.required
      ])],
      meta: ['', Validators.compose([
       // Validators.maxLength(25),
		   // Validators.minLength(1),
		    //Validators.pattern('^[a-zA-Z]+'),
        Validators.required
      ])]
    });
  }
}

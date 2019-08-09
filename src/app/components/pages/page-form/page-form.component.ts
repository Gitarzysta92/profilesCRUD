import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

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

  public pageForm: FormGroup;
  public modulesList: FormArray;
  public modulesNames;

  profile: object;
  validationMessages: object;
  buttonText: string;

  constructor(private formBuilder: FormBuilder) {
    this.profile = {};
    this.validationMessages = validationMessages;
  }

  onSubmit() {
   // const updatedData = Object.assign(this.profile, this.profileForm.value);
   // if (this.profileForm.invalid) return;
   // this.Provider.callback(updatedData);
  }


  ngOnInit() {
    if (this.Provider.userData) {
      this.Provider.userData
        .subscribe(res => res && this.pageForm.patchValue(res))
    } 
    this.buttonText = this.Provider.buttonText;
    this.createForm();
  
  }

  createForm() {
    this.pageForm = this.formBuilder.group({
      path: '',
      title: '',
      modules: this.formBuilder.array([])
    });
    this.modulesList = this.pageForm.get('modules') as FormArray;
  }

  get modulesFormGroup() {
    return this.pageForm.get('modules') as FormArray;
  }

  getContactsFormGroup(index): FormGroup {
    const formGroup = this.modulesList.controls[index] as FormGroup;
    return formGroup;
  }

  moduleName(i, name) {
    return this.modulesList.controls[i].value.type === name;
  }


  // modules actions
  addModule(type) {
    //console.log(type);
    switch(type) {
      case 'button':
      this.modulesList.push(this.createButton());
      break;
      case 'photo':
      this.modulesList.push(this.createPhoto());
      break;
      case 'text':
      this.modulesList.push(this.createText());
      break;
      case 'title':
      this.modulesList.push(this.createTitle());
      break;
    }
  }

  removeModule(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.modulesList.removeAt(index);
  }

  // modules
  createButton(): FormGroup {
    return this.formBuilder.group({
      type: 'button',
      text: '',
      url: ''
     // type: ['type', Validators.compose([Validators.required])], // i.e Email, Phone
    });
  }

  createPhoto(): FormGroup {
    return this.formBuilder.group({
      type: 'photo',
      url: ''
    });
  }

  createText(): FormGroup {
    return this.formBuilder.group({
      type: 'text',
      text: ''
    });
  }

  createTitle(): FormGroup {
    return this.formBuilder.group({
      type: 'title',
      text: ''
    });
  }





  /*
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
  */
}

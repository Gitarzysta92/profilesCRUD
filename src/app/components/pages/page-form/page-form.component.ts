import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Page } from '../../../services/pages/page';
import { PagesService} from '../../../services/pages/pages.service';
import { validationMessages } from './validation-messages';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';


interface Provider {
  buttonText: string;
  callback(formData: Page ): void;
  userData?: any;
}

interface Module {
  type?: string;
  title?: string;
  alt?: string;
  url?: string;
  text?: string;
  target?: string;
  email?: string;
  inputs?: string;
  formType?: string;
  description?: string;
  class?: string;
  tagType?: string;
  file?: string;
  path?: string;
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
  public dbData;
  public Editor = ClassicEditor;
  public fileLoading: boolean;

  expansionsState = [];

  profile: object;
  validationMessages: object;
  buttonText: string;

  constructor(
    private formBuilder: FormBuilder,
    private pagesService: PagesService
  ) {
    this.profile = {};
    this.validationMessages = validationMessages;
    this.fileLoading = false;
  }

  onSubmit() {
    const data = this.prepareData(this.pageForm.value)
    this.Provider.callback(data);
  }

  setExpansionState(index, bool) {
    this.expansionsState[index] = bool;
  }

  prepareData(formData) {
    const { modules: content, ...meta } = formData;
    return { content, meta }
  }

  parseData(dbData) {
    const { content, meta, id } = dbData;

    return {
      id,
      ...(JSON.parse(meta)),
      modules: JSON.parse(content) 
    }

  }


  ngOnInit() {
    if (this.Provider.userData) {
      this.Provider.userData
        .subscribe(res => {
          this.dbData = this.parseData(res);
          res && this.pageForm.patchValue(this.dbData);
          this.createModules();
        })
    }
    this.createForm();
    this.buttonText = this.Provider.buttonText;
  }

  onFileChanged(event, moduleIndex) {
    const reader = new FileReader();

    const [file] = event.target.files;
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.fileLoading = true;
      this.pagesService.uploadFile({
        name: file.name,
        image: reader.result
      }).subscribe(event => {
        const { body } = event;
        if (!(body && body.path)) return;
        console.log(body.path); // handle event here
        this.modulesList.controls[moduleIndex].patchValue({ path: body.path });
        this.fileLoading = false;
      });
    }
  }


  createForm() {
    this.pageForm = this.formBuilder.group({
      path: '',
      title: '',
      menu: '',
      modules: this.formBuilder.array([])
    });
    this.modulesList = this.pageForm.get('modules') as FormArray;
  }

  createModules() {
    this.dbData.modules.forEach(mod => {
      const { type, ...values } = mod;
      this.addModule(type, values);
    })
  }



  drop(event: CdkDragDrop<FormGroup[]>) {
    const dir = event.currentIndex > event.previousIndex ? 1 : -1;
  
    const from = event.previousIndex;
    const to = event.currentIndex;
  
    const temp = this.modulesList.at(from);
    
    for (let i = from; i * dir < to * dir; i = i + dir) {
      const current = this.modulesList.at(i + dir);
      this.modulesList.setControl(i, current);
    }
    this.modulesList.setControl(to, temp);
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
  addModule(type, values) {
    //console.log(type);
    switch(type) {
      case 'button':
      this.modulesList.push(this.createButton(values));
      break;
      case 'photo':
      this.modulesList.push(this.createPhoto(values));
      break;
      case 'text':
      this.modulesList.push(this.createText(values));
      break;
      case 'title':
      this.modulesList.push(this.createTitle(values));
      break;
      case 'customForm':
      this.modulesList.push(this.createCustomPageForm(values));
      break;
      case 'predefinedElement':
      this.modulesList.push(this.createPredefinedElement(values));
      break;
      case 'textAndButton':
      this.modulesList.push(this.createtextAndButton(values));
      break;
      case 'accordion':
      this.modulesList.push(this.createAccordion(values));
      break;
    }
  }

  removeModule(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.modulesList.removeAt(index);
  }

  // modules
  createButton(values: Module = {}): FormGroup {
    return this.formBuilder.group({
      type: 'button',
      tagType: values.tagType || '',
      text: values.text || '',
      url: values.url || '',
      target: values.target || '',
      class: values.class || ''
     // type: ['type', Validators.compose([Validators.required])], // i.e Email, Phone
    });
  }

  createPhoto(values: Module = {}): FormGroup {
    return this.formBuilder.group({
      type: 'photo',
      title: values.title || '',
      alt: values.alt || '',
      path: values.path || ''
    });
  }

  createText(values: Module = {}): FormGroup {
    return this.formBuilder.group({
      type: 'text',
      text: values.text || ''
    });
  }

  createTitle(values: Module = {}): FormGroup {
    return this.formBuilder.group({
      type: 'title',
      text: values.text || ''
    });
  }

  createCustomPageForm(values: Module = {}): FormGroup {
    return this.formBuilder.group({
      type: 'customForm',
      text: values.text || '',
      inputs: values.inputs || '',
      title: values.title || '',
      email: values.email || ''
    });
  }

  createPredefinedElement(values: Module = {}): FormGroup {
    return this.formBuilder.group({
      type: 'predefinedElement',
      formType: values.formType || ''
    });
  }


  createtextAndButton(values: Module = {}): FormGroup {
    return this.formBuilder.group({
      type: 'textAndButton',
      text: values.text || '',
      url: values.url || '',
      target: values.target || '',
      class: values.class || '',
      description: values.description || ''
    });
  }

  createAccordion(values: Module = {}): FormGroup {
    return this.formBuilder.group({
      type: 'accordion',
      title: values.title || '',
      text: values.text || ''
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Page } from '../../../services/pages/page';
import { PagesService } from '../../../services/pages/pages.service';

interface FormSetup {
  buttonText: string;
  callback: Function;
  userData?: Observable<Page>;
}

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

export class EditPageComponent implements OnInit {

  formSetup: FormSetup = {
    buttonText: 'Zaktualizuj stronę',
    callback: this.updateProfile.bind(this)
  }

  constructor(
    private route: ActivatedRoute,
    private pagesService: PagesService,
    private location: Location
  ) {}

  updateProfile(formData): void {
    const id = this.route.snapshot.paramMap.get('id');
    const resultWithId = Object.assign(formData, { id });
    this.pagesService.updatePage(resultWithId)
      .subscribe(res => res && this.location.back());
  }

  getUserData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.formSetup.userData = this.pagesService.getPage(id);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getUserData();
  }
}

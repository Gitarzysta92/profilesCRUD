import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';

import { Page } from '../../../services/pages/page';
import { PagesService } from '../../../services/pages/pages.service';


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})

export class AddPageComponent implements OnInit {

  formSetup: object = {
    buttonText: 'Dodaj stronę',
    callback: this.addProfile.bind(this)
  }

  constructor(
    private pagesService: PagesService,
    private location: Location
  ) {}

  addProfile(formData: Page): void {
    this.pagesService.addPage(formData)
      .subscribe(res => res && this.location.back());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}

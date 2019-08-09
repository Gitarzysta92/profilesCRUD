import { Component, OnInit } from '@angular/core';

import { Page } from '../../../services/pages/page';
import { PagesService } from '../../../services/pages/pages.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
  profiles: Page[] = [];

  constructor(
    private pagesService: PagesService
    ) {}

  getProfiles(): void {
    this.pagesService.getPages()
      .subscribe(profiles => {
        this.profiles = profiles.map(profile => {
          return {
            id: profile.page_ID,
            ...(JSON.parse(profile.meta))
          }
        });
      });
  }

  removeProfile(id: string): void {
    this.pagesService.deletePage(id)
      .subscribe(res => this.getProfiles());
  }
  
  ngOnInit() {
    this.getProfiles();
  }

}


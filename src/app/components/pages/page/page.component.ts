import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Page } from '../../../services/pages/page';
import { PagesService } from '../../../services/pages/pages.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})


export class PageComponent implements OnInit {
  profile: Page;
  
  constructor(
    private route: ActivatedRoute,
    private pagesService: PagesService,
    private location: Location
  ) {}

  getProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pagesService.getPage(id)
      .subscribe(profile => {  
        this.profile = profile;
      });
  }

  removeProfile(id: string): void {
    this.pagesService.deletePage(id)
      .subscribe(() => this.location.back());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getProfile();
    
  }
}


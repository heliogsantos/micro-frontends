import { Component, OnInit } from '@angular/core';

import { HeaderService } from './../../services/header-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  toggleNav: boolean

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.nav.subscribe(toggle => this.toggleNav = toggle)
  }

}

import { Component, OnInit } from '@angular/core';

import { HeaderService } from './../../services/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navToggle = true

  constructor(private headerService: HeaderService) { }

  openNavBar() {
    this.headerService.nav.next(this.navToggle)

    this.headerService.nav.subscribe(value => {
      this.navToggle = value
      this.navToggle = !this.navToggle
    })
  }

  ngOnInit() {}

}

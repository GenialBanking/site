import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.isActive = this.isActive ? false : true;
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  isSideNavToggled() {
    this.menuStatus =! this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}

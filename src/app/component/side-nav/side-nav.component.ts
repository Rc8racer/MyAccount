import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  list = [
    {number: '1', name: 'Timesheet', icon: 'fa-solid fa-table-cells', route : 'timesheet'},
    {number: '2', name: 'Time-Organizer', icon: 'fa-solid fa-clock', route : 'time-org'},
    {number: '3', name: 'emp to-do', icon: 'fa-solid fa-list-check', route : 'to-do'},
    {number: '3', name: 'Jira Board', icon: 'fa-solid fa-list-check', route : 'jira'}
  ];  
  constructor() { }
  @Input() sideNavStatus: boolean = false;
  ngOnInit(): void {
  }

}

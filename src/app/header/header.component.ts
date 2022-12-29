import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  DashboardComponent: any;

  constructor() { }

  ngOnInit(): void {
  }
  openDialog(): void{
    console.log('fuuck you');
    
  }
}

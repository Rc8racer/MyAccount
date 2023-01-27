import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ToDoComponent } from './component/to-do/to-do.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { TimesheetComponent } from './component/timesheet/timesheet.component';
import { TimeOrganiserComponent } from './component/time-organiser/time-organiser.component';
import { JiraBoardComponent } from './component/jira-board/jira-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToDoComponent,
    MainNavComponent,
    SideNavComponent,
    TimesheetComponent,
    TimeOrganiserComponent,
    JiraBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

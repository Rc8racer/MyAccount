import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JiraBoardComponent } from './component/jira-board/jira-board.component';
import { TimeOrganiserComponent } from './component/time-organiser/time-organiser.component';
import { TimesheetComponent } from './component/timesheet/timesheet.component';
import { ToDoComponent } from './component/to-do/to-do.component';

const routes: Routes = [
  {path:'timesheet', component: TimesheetComponent},
  {path:'time-org', component: TimeOrganiserComponent},
  {path:'to-do', component: ToDoComponent},
  {path:'jira', component: JiraBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

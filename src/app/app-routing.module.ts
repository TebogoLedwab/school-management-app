import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolDashboardComponent } from './components/school-dashboard/school-dashboard.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';


const routes: Routes = [
  { path: '', component: SchoolDashboardComponent },
  {path: 'schoolDashboard' , component: SchoolDashboardComponent},
  {path: 'studentDetails' , component: SchoolDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { CompanyComponent } from './components/company/company.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectComponent } from './components/project/project.component';
import { ViewClientComponent } from './Views/view-client/view-client.component';
import { ViewCompanyComponent } from './Views/view-company/view-company.component';

const routes: Routes = [
  {
    path:'',
    component:CompanyComponent
  },
  {
    path:'company',
    component:CompanyComponent
  },
  {
    path:'company/:id',
    component:ViewCompanyComponent
  },
  {
    path:'client',
    component:ClientComponent
  },
  {
    path:'client/:id',
    component:ViewClientComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'project',
    component:ProjectComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

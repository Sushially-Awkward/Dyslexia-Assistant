import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PractiseComponent } from './practise/practise.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'test',
    component: TestComponent
  },
  {
    path:'practise',
    component: PractiseComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'**',
    component: NotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/users/about/about.component';
import { LoginComponent } from './components/users/login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

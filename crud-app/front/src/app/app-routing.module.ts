import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuardService } from './guards/admin-guard.service';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent,  canActivate: [AdminGuardService]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: '**',   redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UsersService } from './services/users.service';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatInputModule} from '@angular/material/input';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card'
import { AdminGuardService } from './guards/admin-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    
  ],
  providers: [UsersService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

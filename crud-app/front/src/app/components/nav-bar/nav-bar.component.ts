import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAuthenticated : boolean = false
  constructor(private auth : AuthService, private router : Router) { 
    
    //console.log(this.auth.currentUser)
  }
  
  ngOnInit(): void {
    //this.Load()
    this.auth.loadUser()
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  logout()
  {
    this.auth.logout()
    this.isAuthenticated = false
    //this.router.navigate(['/login']);
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }


  currentUser : any
    
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
 async onSubmit()
  {
    try
    {
      await this.auth.login(this.loginForm.value)
      this.router.navigateByUrl('/users')
    }
    catch(e : any)
    {
      console.log(e.error);
    }
      
  }
}



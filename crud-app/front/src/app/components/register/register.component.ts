import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    name: new FormControl(''),
  });


  
  onSubmit()
  {
    console.log(this.registerForm.value)

    this.auth.register(this.registerForm.value).subscribe((response) => {                           //Next callback
      console.log('response received')
      console.log(response);
    },
    (e) => {
      console.log(e.error.message)
    }
    )
  }
 
}


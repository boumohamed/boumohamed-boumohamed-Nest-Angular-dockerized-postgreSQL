import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated : boolean = false
  currentUser : any
  constructor(private http : HttpClient) { }

  httpOptions? = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        
    }),
    
};
  url = 'http://localhost:3000/auth/';
login(user : User)
{

  return new Promise((resolve, rejet) => {
    this.http.post(this.url + 'signin', {email: user.email, password: user.password}, this.httpOptions)
    .subscribe( res => {
      this.currentUser = res
      this.authenticated = true;
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser));

      resolve(res)
    },
    err => {
      this.authenticated = false
      rejet(err)
    })
  })

}


register(user : User)
{
  return this.http.post<any>(this.url + 'signup', user, this.httpOptions)
}



loadUser(){
  let user=localStorage.getItem('currentUser');
  if(user){
    this.currentUser=JSON.parse(user);
    this.authenticated=true;
  }
  
}

logout()
  {
      this.authenticated = false;
      this.currentUser = undefined;
      localStorage.removeItem('currentUser');
  }
  
isAuthenticated()
{
  return this.authenticated
}

}

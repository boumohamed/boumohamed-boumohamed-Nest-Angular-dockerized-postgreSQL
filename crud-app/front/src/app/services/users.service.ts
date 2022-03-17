import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { user } from '../components/users/users.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  httpOptions? = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        
    }),
    
};
  url = 'http://localhost:3000/auth/user';



getUsers() {
    
    return this.http.get<any>(this.url, this.httpOptions);

}
supprimer(id: number)
{

  return new Promise((resolve, rejet) => {
    this.http.delete('http://localhost:3000/user/supprimer/' + id , this.httpOptions)
    .subscribe( res => {
      resolve(res)
    },
    err => {
     
      rejet(err)
    })
  })

}


}

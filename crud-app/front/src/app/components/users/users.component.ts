import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

export interface user {
  email: string;
  createAt: Date;
  updateAt: Date;
  name: string;
  password : string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loading : boolean = true;

  user: any;
  users: any;

  displayedColumns: string[] = ['Email', 'Created At', 'Updated At', 'Name'];


  constructor(private data : UsersService,
              private router : Router) { 
    

  }

 
  ngOnInit(): void {
    this.data.getUsers()
      .subscribe(resp => {
        this.users = resp;
        this.loading = false;
        //console.log(this.users)
      });

  }

  async Supprimer(id : number)
  {
    try
    {
      await this.data.supprimer(id)
      this.router.navigateByUrl('/users')
    }
    catch(e : any)
    {
      console.log(e.error);
    }
    
    
    
    
  }
  

 
  }
  



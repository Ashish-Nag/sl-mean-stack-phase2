import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private userApi: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userApi.loadUserDetails()
    .subscribe(res=>this.users = res, e=>console.log(e), ()=>console.log("loaded all users"));
  }

}

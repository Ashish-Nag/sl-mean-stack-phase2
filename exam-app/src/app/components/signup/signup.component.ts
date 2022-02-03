import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordMisMatch: boolean = false;
  userObj : any ={};
  constructor(private userApi: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(details: NgForm){
    let userDetails = details.value;
    if(userDetails.password != userDetails.confirmPassword){
      this.passwordMisMatch = true;
      return;
    }else {
      this.passwordMisMatch = false;
      this.userObj.name = userDetails.name;
      this.userObj.gender = userDetails.gender;
      this.userObj.email = userDetails.email;
      this.userObj.password = userDetails.password;
      this.userObj.testTaken = false;
      this.userObj.result = 0;

      console.log(this.userObj);

      this.userApi.postUserDetails(this.userObj)
        .subscribe(res=>console.log(res), e=>console.log(e), ()=>{
          console.log('finished posting');
          details.reset();
          this.router.navigate(['admin/userlist']);
        })
    }
    console.log(userDetails);
  }
}

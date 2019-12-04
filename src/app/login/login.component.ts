import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  username: string;
  password: string;

  constructor(private rout:Router) { }

  submit(){
    if(this.username=="test"&&this.password=="test1")
    {
        localStorage.setItem("token","peers123");
        this.rout.navigate(["users"])
    }
    else{
        alert("please enter values")
    }
   }
}
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserModel } from '../models/user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user:UserModel;

  constructor(private router:RouterModule) {

  }

  ngOnInit(): void {
    this.user={name:'',email:"",password:''}

  }
  onSubmit(){
    console.log(this.user);

  }

}

import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserModel } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserFirebaseService } from '../services/user-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: UserModel;

  constructor(
    private router: Router,
    private auth: AuthService,
    private userFirebas: UserFirebaseService
  ) {}

  ngOnInit(): void {
    this.user = { email: '', password: '' };
  }
  onSubmit() {
    //console.log(this.user);
    //LOGIN CON MI API
    this.auth.login(this.user).subscribe((res) => {
      localStorage.setItem('token', res.toString());
      this.router.navigate(['/list']);
    });

    //CREANDO USUARIOS EN FIREBASE
    this.userFirebas.create(this.user);
  }

  // this.employeeService.postEmployee(form.value).subscribe((res) => {
  //   this.getEmployees();
  //   this.resetForm(form);
  // });
}

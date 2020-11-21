import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  selectUser: UserModel;
  users: UserModel[];
  readonly API = 'http://52.91.252.7:8080/api/auth/';

  constructor(private http: HttpClient) {
    //this.selectUser = new UserModel();
  }

  login(user: UserModel) {
    return this.http.post(this.API, user)
    .pipe(
      catchError(error=>{
        alert(error.error.msg)
        return error
      })
  );
  }


  // login(user: UserModel): Observable<any> {
  //   return this.http.post(this.API, user).pipe(
  //     map((response) => response),
  //     catchError(error => {
  //       return error.message;
  //     })
  //   );
  // }
}

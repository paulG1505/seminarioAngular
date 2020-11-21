import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class UserFirebaseService {
  constructor(private firestore: AngularFirestore) {}

  create(data): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('Users')
        .add(data)
        .then((res) => {
          console.log(res);
          Swal.fire('Ok', 'Usuario creado con exito','success')
        })
        .catch((e) => {
          console.log(e);
          Swal.fire('Error',e,'error')
        });
    });
  }

  getUser(string){

  }



}

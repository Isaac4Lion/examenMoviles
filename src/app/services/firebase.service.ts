import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFireStore) { }

  agregarDatos(datos: any) {
    return this.afs.collection('datos').add(datos)
  }
}

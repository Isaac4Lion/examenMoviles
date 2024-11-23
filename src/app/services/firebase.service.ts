import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Asegúrate de importar AngularFirestore

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private afs: AngularFirestore) {}

  agregarDatos(datos: any) {
    // Inserta cada libro como un documento individual
    datos.forEach((dato: any) => {
      this.afs.collection('datos').add(dato); // Agrega cada libro con su url e imagen
    });
  }
}

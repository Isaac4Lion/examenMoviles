import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks () {
    const numerosAleatorios = []
    for (let i = 0; i < 10; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100);
      numerosAleatorios.push(numeroAleatorio)
    } 
    const numerosFormateados = numerosAleatorios.join(',')
    console.log(numerosFormateados)
    return this.http.get(`https://gutendex.com/books/?ids=${numerosFormateados}`);
  }
}
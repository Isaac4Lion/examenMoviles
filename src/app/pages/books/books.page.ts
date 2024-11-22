import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { RobotService } from 'src/app/services/robot.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  bookNames: any[] = [];
  robotsImages: any[] = [];

  book: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BooksService,
    private firebaseService: FirebaseService,
    private robotService: RobotService,
  ) { 
    this.book = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getBooksNames()
  }
  async getBooksNames() {
    try {
      const response = await firstValueFrom(this.bookService.getBooks());
      const results = (response as any).results
      results.forEach((result: { title: string; }) => {
        console.log(result.title)
        this.bookNames.push(result.title)
      })
      return response;
    } catch (error) {
      this.bookNames = [];
      return error;
    }
  }
  async saveFirebase() {
    const datos = []
    this.bookNames.forEach(book => {
      const url = `https://robohash.org/${book}`
      const objeto = {url: url, nombre: book}
      datos.push(objeto)
    })
    this.firebaseService.agregarDatos(datos)
  }
}

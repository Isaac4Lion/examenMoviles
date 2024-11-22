import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http: HttpClient) { }

  getRobotImage (text: string) {
    return this.http.get('https://robohash.org/'+ text);
  }
}
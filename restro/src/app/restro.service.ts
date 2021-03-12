import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class RestroService {
url="http://localhost:3000/restraunts"
  constructor(private http :HttpClient) { }
  getlist()
  {
    // console.log("some data")
    // return "data list here"
    return this.http.get(this.url)
  }
}


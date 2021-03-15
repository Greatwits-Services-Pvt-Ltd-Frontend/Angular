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

  saverestro(data:any){
    // console.log(data)
    return this.http.post(this.url,data)

  }

deleterestro(id:any){
  return this.http.delete(`${this.url}/${id}`)
}

getcurrentrestro(id:any){
  return this.http.get(`${this.url}/${id}`)
}





}


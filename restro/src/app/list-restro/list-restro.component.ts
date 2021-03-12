import { Component, OnInit } from '@angular/core';
import {  RestroService} from "../restro.service";

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {

  constructor(private restro:RestroService) { }
collection:any={}
  ngOnInit(): void {
    this.restro.getlist().subscribe((result)=>{
      console.log(result);
      this.collection=result
    })
    // console.log(this.restro.getlist())
  }

}

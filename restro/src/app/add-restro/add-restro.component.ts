import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl  } from "@angular/forms";
import { RestroService } from "../restro.service";

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {

  constructor(private restro:RestroService) { }
  addrestro=new FormGroup({
name:new FormControl(''),
email:new FormControl(''),
address:new FormControl(''),


  }

  )

  ngOnInit(): void {
  }

  collectrestro()
  {
    // console.log(this.addrestro.value)
    this.restro.saverestro(this.addrestro.value).subscribe((result)=>{
      console.log(result)
    })



  }

}

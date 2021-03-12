import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl  } from "@angular/forms";

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {

  constructor() { }
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
    console.log(this.addrestro.value)
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl  } from "@angular/forms";
import { RestroService } from "../restro.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {

  editrestro=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
  }
  )
  constructor(private router:ActivatedRoute,private restro:RestroService) { }


  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.restro.getcurrentrestro(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result)
     this.editrestro=new FormGroup({
        name:new FormControl(result["name"]),
        email:new FormControl(result['email']),
        address:new FormControl(result['address'])
      } )
    
  
})
  }
}



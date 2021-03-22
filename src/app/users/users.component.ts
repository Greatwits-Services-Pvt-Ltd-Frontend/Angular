// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
// @Input() anky
@Output() parentComponent:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit("sumit")
  }
}

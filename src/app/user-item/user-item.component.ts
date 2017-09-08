import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl:'./user-list.component.html',
  //styleUrls: ['./hello-world.component.css']
})

export class UserItemComponent implements OnInit {
  names: string [];

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }

  ngOnInit() {

  }
}

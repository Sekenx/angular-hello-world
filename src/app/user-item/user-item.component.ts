import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl:'./user-list.component.html',
  //styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit {
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {

  }
}

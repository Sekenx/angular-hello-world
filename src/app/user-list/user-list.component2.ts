import { Component, OnInit } from '@angular/core';

export class UserListComponent implements OnInit {

  names: string[];

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }

  ngOnInit() {
  }
}

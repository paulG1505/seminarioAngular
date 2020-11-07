import { Component, OnInit } from '@angular/core';
import { NameModel } from '../models/name.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {
  public name :NameModel;
  constructor() { }

  ngOnInit(): void {
    this.name={ name:'Mi primera página', age:22}
  }

}

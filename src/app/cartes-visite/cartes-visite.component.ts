import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartes-visite',
  templateUrl: './cartes-visite.component.html',
  styleUrls: ['./cartes-visite.component.scss'],
})
export class CartesVisiteComponent implements OnInit {
  json1: any;

  users: any = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.json1 = json);

  hidden:boolean=true;

  constructor() {}

  ngOnInit(): void {}

  toggle(){
    this.hidden=!this.hidden;

  }
}

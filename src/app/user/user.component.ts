import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input('inputUser')theUsers: {username: string, id: number}[]= [];
  constructor() { }

  ngOnInit(): void {
  }

}

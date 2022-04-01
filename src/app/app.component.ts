import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: {username: string, id: number}[] = [
    {username: "Ryan", id: 13},
    {username: "Kayla", id: 8},
    {username: "Adam", id: 14},
  ];

}

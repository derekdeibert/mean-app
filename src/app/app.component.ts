import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Remind Me';
  //declare variable to hold response and make it public to be accessible from components.html
  public user;
  //initialize the call using StudentService
  constructor(private _myService: UsersService) { }

}

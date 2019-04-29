import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Remind Me';
  //declare variable to hold response and make it public to be accessible from components.html
    public user;
    readonly ROOT_URL = 'api.openweathermap.org/data/2.5/forecast?id=524901&APPID=b0a9ee796b837e0e860b83eb1cef502f';
  //initialize the call using StudentService
    posts: any;
    public constructor(private _myService: UsersService, private http: HttpClient) { }

    getPosts() {
        this.posts = this.http.get(this.ROOT_URL)
    }

}

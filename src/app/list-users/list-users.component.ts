import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public user;
  public data;
  //initialize the call using StudentService
  constructor(private _myService: UsersService) { }
  ngOnInit() {
    this.getStudents();
  }
  //method called OnInit
  getStudents() {
    this._myService.getStudents().subscribe(
      //read data and assign to public variable students
      data => { this.user = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  onDelete(userId: string) {
    this._myService.deleteStudent(userId);
  }
}


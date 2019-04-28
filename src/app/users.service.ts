import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {

  constructor(private http:HttpClient) {}

  // Uses http.get() to load data
  getStudents() {
    return this.http.get('http://localhost:8000/users');
  }
  // Uses http.post() to post data
  addStudents(firstName: string, lastName: string, username: string, task: string, month: string, day: string, year: string) {
    this.http.post('http://localhost:8000/users',{ firstName, lastName, username, task, month, day, year })
      .subscribe((responseData) => {
        console.log(responseData);
      });
    //location.reload();
  }
  deleteStudent(userId: string) {
    this.http.delete("http://localhost:8000/users/" + userId)
      .subscribe(() => {
        console.log('Deleted: ' + userId);
      });
    location.reload();
  }
  updateUser(studentId: string, firstName: string, lastName: string, username: string, task: string, month: string, day: string, year: string) {
    //request path http://localhost:8000/students/5xbd456xx
    //first and last names will be send as HTTP body parameters
    this.http.put("http://localhost:8000/users/"
      + studentId,{ firstName, lastName, username, task, month, day, year })
      .subscribe(() => {
        console.log('Updated: ' + studentId);
      });
    location.reload();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() username: string;
  @Input() task: string;
  @Input() month: string;
  @Input() day: string;
  @Input() year: string;

  private mode = 'add'; //default mode
  private id: string;
  constructor(private _myService: UsersService, private router: Router, public route: ActivatedRoute) { }
  onSubmit(){
    if (this.mode == 'add')
      this._myService.addStudents(this.firstName , this.lastName, this.username, this.task, this.month, this.day, this.year);
    if (this.mode == 'edit')
      this._myService.updateUser(this.id, this.firstName , this.lastName, this.username, this.task, this.month, this.day, this.year);
    this.router.navigate(['/listUsers']);
    location.reload();
  }
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id')) {
        this.mode = 'edit';
        /*request had a parameter _id */
        this.id = paramMap.get('_id');
      }
      else {
        this.mode = 'add';
        this.id = null; }
    });
  }
}

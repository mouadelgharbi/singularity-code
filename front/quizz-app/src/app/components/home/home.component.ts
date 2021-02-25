import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  INSTRUCTOR = 'INSTRUCTOR'
  STUDENT = 'STUDENT'

  constructor(private router:  Router) { }

  ngOnInit(): void {
  }

  tileClick(type_user: string) {
    if(type_user == this.STUDENT){
      this.router.navigateByUrl('/student-form');
    } else {
      this.router.navigateByUrl('/instructor');
    }
  }
}

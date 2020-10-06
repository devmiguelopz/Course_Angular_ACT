import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public title: string;

  constructor(private router: Router) {
    this.title = "Dev";
  }

  ngOnInit():void {
  }

  redirectContact(){
    this.router.navigateByUrl('/contact')
  }

}

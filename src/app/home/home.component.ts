import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "my-dream-app";
  cards: object[];

  ngOnInit() {
    console.log(this.userSvc);
  }

  constructor(private userSvc:UserService) {
    this.cards = this.userSvc.getUsers();
  }

}

import { Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data:Array<IUser> =[
    {
      name:"Miguel", company:"Leverit"
    },
    {
      name:"Angel", company:"Hikloud"
    }
  ]

  constructor() { }

  getUsers():Array<IUser>{
    return this.data;
  }
}

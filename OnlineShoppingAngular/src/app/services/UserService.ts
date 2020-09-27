import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

  register(user:User):boolean
  {
      console.log(user.email);
      return true;
  }
  login(user:User):boolean
  {
    console.log (user);
    return true;
  }
  changePassword(user:User):boolean
  {
    console.log(user);
    return true;
  }
}
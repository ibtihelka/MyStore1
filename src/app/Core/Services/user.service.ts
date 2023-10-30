import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user-module/user';

@Injectable(
  { providedIn: UserService}
)
export class UserService {

URL="http://localhost:3000/users"
    list : any ;
httpOptions ={
  header: new HttpHeaders({
      'Content-type': 'application/json'
  })
}

  constructor(private http:HttpClient ) { }
  // GET POST ... retour de type Observable
  getAllusers(){
    return this.http.get<User[]>(this.URL);
  }
  getUserById(id : number){
    return
  }
  addUser(u:User){}

  updateUser(id: number , u:User){}
  deleteUser (id: number){}


}

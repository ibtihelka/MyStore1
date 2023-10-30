import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers: [UserService]
})
export class ListUserComponent {
  searchItem! : string;


  list:User[]=[];
  constructor(private Router:Router , private userS:UserService) {}

  ngOnInit(){

      this.userS.getAllusers().subscribe((users: User[]) => this.list = users);
  }

        onDeleteTask(index: number) {
          if (index !== -1) {
              this.list.splice(index, 1);
        }
      }


        }


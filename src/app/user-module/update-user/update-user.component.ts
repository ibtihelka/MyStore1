import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
id!: Number;
  constructor(private actR:ActivatedRoute){}
  getParam(){
    //this.id= Number (this.actR.snapshot.paramMap.get('param'));
    this.actR.paramMap.subscribe(data => this.id=Number(data.get('param')))
  }
  //param ce trouve dans app-routing 
  ngOnInit(): void {
      this.getParam();
  }
}

import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-form-1',
  templateUrl: './form-1.component.html',
  styleUrls: ['./form-1.component.css']
})
export class Form1Component implements OnInit {

  constructor(private userInfoService: UserInfoService) { }

  userName = '';
  password = '';

  onSubmit(aform) {
    this.userInfoService.addUser(this.userName,this.password);
    console.log(this.userInfoService.users);
   }
   
  ngOnInit() {
  }

}

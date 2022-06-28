import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LoginFormComponent',
  templateUrl: './LoginFormComponent.component.html',
  styleUrls: ['./LoginFormComponent.component.css']
})
export class LoginFormComponentComponent implements OnInit {
  
  message = "";
  email="";
  password="";

  constructor() { }

  ngOnInit() {
  }
  onSubmit(): void{
    this.message="login validé";
  }
}

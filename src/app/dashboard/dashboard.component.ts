import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  UserName: any;

  constructor() { }

  ngOnInit() {
    let name = localStorage.getItem("userName");
    console.log("name",name);
    if(name != null){
      let split = name.split("@");
      this.UserName = split[0];
    }else{
      alert("Please log in first to use dashboard");
    }
    
  }

}

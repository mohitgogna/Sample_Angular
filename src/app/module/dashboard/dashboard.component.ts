import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidenavOpenedStatus = false;
  constructor() { }

  ngOnInit(): void {
  }

  onHomeButtonClicked(params: any): void {

    console.log(`dashboard got event ${params}`);
    this.toggleSideNav();
    this.sidenavOpenedStatus = !this.sidenavOpenedStatus;
  }

  toggleSideNav(): void {
    if (!this.sidenavOpenedStatus) {      
      document.getElementById("mainContent").style.marginLeft = "250px";  
    }
    else {
      document.getElementById("mainContent").style.marginLeft = "0px";  
    }
  }

  onSidenavClosed(params:any):void{
    console.log(`onSidenavClosed params - ${params}`);
    this.toggleSideNav();
    this.sidenavOpenedStatus = !this.sidenavOpenedStatus;
  }

}

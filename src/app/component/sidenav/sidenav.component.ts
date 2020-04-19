import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit,OnChanges {
  // @Input() sidenavEvent:boolean;
  // sidenav = true;

  @Input() isSidenavOpened:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.toggleSideNav();
  }
  
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("detailClass").style.marginLeft = "250px";  
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("detailClass").style.marginLeft = "0";
  }

  toggleSideNav(): void {
    if (!this.isSidenavOpened) {
      this.closeNav();
    }
    else {
      this.openNav();
    }
  }

  
}

import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit,OnChanges {

  @Input() isSidenavOpened:boolean;
  @Output() isSidenavClosed:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    console.log("ngOnChanges");
    this.toggleSideNav();
  }
  
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    console.log("closeNav");
    document.getElementById("mySidenav").style.width = "0";    
  }

  toggleSideNav(): void {
    if (!this.isSidenavOpened) {
      this.closeNav();
    }
    else {
      this.openNav();
    }
  }

  sidenavCloseButtonClicked(){
    console.log("sidenavCloseButtonClicked");
    this.closeNav();
    this.isSidenavClosed.emit(true);
  }
  
}

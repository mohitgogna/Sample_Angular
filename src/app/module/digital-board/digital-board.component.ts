import { Component, OnInit } from '@angular/core';
import { Build } from '../../model/Build';
import { ModuleService } from '../module.service';


@Component({
  selector: 'app-digital-board',
  templateUrl: './digital-board.component.html',
  styleUrls: ['./digital-board.component.css']
})
export class DigitalBoardComponent implements OnInit {

  builds: Build[] = [];

  dataGenerator(): void {
    for (let i = 0; i < 10; i++) {
      this.builds.push({
        Id: i.toString(),
        Name: "Pipeline " + i,
        Status: "Passed",
        Info: "This is build information of build " + i,
        Version: "v1.1." + i,
        Time: i + "m 24s",
        Link1: "#",
        Link2: "#" + i,
        Link3: "#",
        Progress: "10" + i
      });
    }

    //return this.builds;
  }


  // buildInfo_1: Build = {
  //   Id: "2",
  //   Name: "Search api contract",
  //   Status: "Passed",
  //   Info: "This is Build 1 information.",
  //   Version: "v12.2.4.5",
  //   Time: "5m 24s 2837ms",
  //   Link1: "#",
  //   Link2: "bar",
  //   Link3: "#",
  //   Progress: "100"
  // }


  constructor(private moduleService: ModuleService) {

  }

  ngOnInit(): void {
    //this.dataGenerator();
    this.builds = this.moduleService.getBuilds();
    this.moduleService.getJenkinsBuild();
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}

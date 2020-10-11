import { Component, OnInit } from '@angular/core';
import { build$ } from 'protractor/built/element';
import { Build } from 'src/app/model/Build';
import { BuildRepository } from 'src/app/model/build.repository';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selectedBuild:string;
  newBuild:Build={
    Id:"",
    Name: "Pipeline ",
    Status: "Passed",
    Info: "This is build information of build ",
    Version: "v1.1.",
    Time: "m 24s",
    Link1: "#",
    Link2: "#",
    Link3: "#",
    Progress: "10"
  };


  constructor(private buildRepository:BuildRepository) { }

  ngOnInit(): void {
  }

  getBuild():Build[]{
    return this.buildRepository.getBuilds();
  }

  getSelectedItem(item:any):boolean{
    return item.Id==this.selectedBuild;
  }

  get jsonBuild(){
    return JSON.stringify(this.newBuild);
  }

  addBuild(b:Build){
    console.log("New build"+ this.jsonBuild);
  }
}

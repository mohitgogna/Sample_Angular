import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-board',
  templateUrl: './digital-board.component.html',
  styleUrls: ['./digital-board.component.css']
})
export class DigitalBoardComponent implements OnInit {

  data: any = {
    "IsBuild": "true",
  };

  //dataArray:any=["1","2","3","4"];
  dataArray: any = [
    {
      "Row": "Row 1",
      "column": ["1", "2", "3", "4"]
    },
    {
      "Row": "Row 2",
      "column": ["11", "22", "33", "44"]
    },
    {
      "Row": "Row 3",
      "column": ["111", "222", "333", "444"]
    }
  ]

  constructor() { }

  ngOnInit(): void {
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

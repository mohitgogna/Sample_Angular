import { Component, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  // chartOptions:Highcharts.Options= {
  //   series: [{
  //     data: [1, 2000, 3000],
  //     type: 'bar'
  //   }]
  // };

  //chartOptions:Highcharts.Options={
    chartOptions={
    chart: {
      type: 'area'
    },
    title: {
      text: 'Random Data'
    },
    series:[
      {
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

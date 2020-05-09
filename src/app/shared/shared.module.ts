import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './widget/bar/bar.component';
import { PieComponent } from './widget/pie/pie.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    BarComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports:[
    BarComponent,
    PieComponent
  ]
})
export class SharedModule { }

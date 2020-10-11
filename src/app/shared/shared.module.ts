import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './widget/bar/bar.component';
import { PieComponent } from './widget/pie/pie.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { TableComponent } from './widget/table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BarComponent,
    PieComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    FormsModule
  ],
  exports:[
    BarComponent,
    PieComponent
  ]
})
export class SharedModule { }

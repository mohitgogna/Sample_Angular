import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './widget/bar/bar.component';
import { PieComponent } from './widget/pie/pie.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { TableComponent } from './widget/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableReactiveformComponent } from './widget/table-reactiveform/table-reactiveform.component';

@NgModule({
  declarations: [
    BarComponent,
    PieComponent,
    TableComponent,
    TableReactiveformComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    BarComponent,
    PieComponent
  ]
})
export class SharedModule { }

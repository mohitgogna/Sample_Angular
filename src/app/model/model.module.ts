import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildRepository } from './build.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    BuildRepository,
    StaticDataSource
  ]
})
export class ModelModule { }

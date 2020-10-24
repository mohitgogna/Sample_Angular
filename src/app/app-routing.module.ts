import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DetailComponent } from './module/detail/detail.component';
import { DigitalBoardComponent } from './module/digital-board/digital-board.component';
import { KPIMetricsComponent } from './module/kpimetrics/kpimetrics.component';
import { BarComponent } from './shared/widget/bar/bar.component';
import { TableReactiveformComponent } from './shared/widget/table-reactiveform/table-reactiveform.component';
import { TableComponent } from './shared/widget/table/table.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path:'digitalboard',
        component:DigitalBoardComponent
      },
      {
        path:'kpi',
        component:KPIMetricsComponent
      },
      {
        path:'table',
        component:TableComponent
      },
      {
        path:'table-react',
        component:TableReactiveformComponent
      },
      {
        path: '',
        component: DetailComponent
      }
    ]
  },
  {
    path: 'dashboard-detail',
    component: DetailComponent,
    //redirectTo:'/dashboard/detail',
    pathMatch:'full'
  },  
  {
    path:'bar',
    component:BarComponent
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DetailComponent } from './module/detail/detail.component';
import { DigitalBoardComponent } from './module/digital-board/digital-board.component';
import { BarComponent } from './shared/widget/bar/bar.component';


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
        path:'bar',
        component:BarComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

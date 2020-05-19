import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './module/detail/detail.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { DigitalBoardComponent } from './module/digital-board/digital-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DigitalBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

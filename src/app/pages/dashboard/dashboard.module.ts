import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HeaderComponent } from './components/header/header.component';
import { MainModulesModule } from '../../shared/modules/main-modules/main-modules.module';
import { RecentlyEditedComponent } from './components/recently-edited/recently-edited.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    MainModulesModule
  ],
  declarations: [DashboardPage, HeaderComponent, RecentlyEditedComponent]
})
export class DashboardPageModule { }

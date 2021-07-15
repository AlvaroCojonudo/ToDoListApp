import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../components/list/list.component';
import { ItemComponent } from '../../components/item/item.component';
@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ItemComponent
  ]
})
export class MainModulesModule { }

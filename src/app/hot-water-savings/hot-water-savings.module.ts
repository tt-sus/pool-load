import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotWaterSavingsComponent } from './hot-water-savings/hot-water-savings.component';
import { FormsModule }   from '@angular/forms';

import { routing } from './hc-routes'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [HotWaterSavingsComponent]
})
export class HotWaterSavingsModule { }

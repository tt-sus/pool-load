import { RouterModule, Routes } from '@angular/router';
import { PoolComponent } from './pool/pool.component';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
 {path:"",loadChildren: './hot-water-savings/hot-water-savings.module#HotWaterSavingsModule'},
 {path:"pool-load",component:PoolComponent},
 { path: 'hc-savings', loadChildren: './hot-water-savings/hot-water-savings.module#HotWaterSavingsModule' }
]